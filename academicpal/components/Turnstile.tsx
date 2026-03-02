'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'invisible';
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'invisible';
          action?: string;
          appearance?: 'always' | 'execute' | 'interaction-only';
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
  }
}

// Internal component - only rendered on client
function TurnstileWidget({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = 'dark',
  size = 'normal',
  className = '',
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'verified' | 'error'>('loading');
  const renderAttemptedRef = useRef(false);

  // Load script
  useEffect(() => {
    const scriptId = 'cf-turnstile-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (window.turnstile) {
      setScriptLoaded(true);
      return;
    }
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => setStatus('error');
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', () => setScriptLoaded(true));
    }
    
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore
        }
      }
    };
  }, []);

  // Render widget when script is loaded
  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || renderAttemptedRef.current) return;
    if (!window.turnstile) return;

    renderAttemptedRef.current = true;
    
    // Clear any existing widget
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // Ignore
      }
      widgetIdRef.current = null;
    }
    
    containerRef.current.innerHTML = '';
    
    try {
      setStatus('ready');
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          setStatus('verified');
          onVerify(token);
        },
        'error-callback': () => {
          setStatus('error');
          onError?.();
        },
        'expired-callback': () => {
          setStatus('loading');
          renderAttemptedRef.current = false;
          onExpire?.();
        },
        theme,
        size,
        appearance: 'always',
      });
    } catch (err) {
      console.error('Turnstile render error:', err);
      setStatus('error');
      onError?.();
    }
  }, [scriptLoaded, siteKey, theme, size, onVerify, onError, onExpire]);

  const handleRetry = () => {
    setStatus('loading');
    renderAttemptedRef.current = false;
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
        setStatus('ready');
      } catch {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          widgetIdRef.current = null;
          setScriptLoaded(false);
        }
      }
    }
  };

  return (
    <div className={className}>
      <div 
        ref={containerRef} 
        className="flex justify-center min-h-[65px]"
      />
      
      {status === 'loading' && !scriptLoaded && (
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading security check...</span>
        </div>
      )}
      
      {status === 'verified' && (
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm mt-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Verified</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-red-400 text-sm">Verification failed</span>
          <button
            type="button"
            onClick={handleRetry}
            className="text-sm text-blue-400 hover:text-blue-300 underline"
          >
            Click to retry
          </button>
        </div>
      )}
    </div>
  );
}

// Loading placeholder shown during SSR and initial load
function TurnstileLoading({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center min-h-[65px]" />
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-2">
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>Loading security check...</span>
      </div>
    </div>
  );
}

// Dynamic export - completely skips SSR to avoid hydration issues
const Turnstile = dynamic(
  () => Promise.resolve(TurnstileWidget),
  { 
    ssr: false,
    loading: () => <TurnstileLoading />
  }
);

export default Turnstile;
