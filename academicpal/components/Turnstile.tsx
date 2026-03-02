'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

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

export default function Turnstile({
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
  const [mounted, setMounted] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'verified' | 'error'>('idle');
  const renderAttemptedRef = useRef(false);

  // Set mounted on client
  useEffect(() => {
    setMounted(true);
    setStatus('loading');
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore removal errors
        }
      }
    };
  }, []);

  // Render widget when script is loaded
  useEffect(() => {
    if (!mounted || !scriptLoaded || !containerRef.current || renderAttemptedRef.current) return;

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;
      
      renderAttemptedRef.current = true;
      
      // Clear any existing widget first
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore
        }
        widgetIdRef.current = null;
      }
      
      // Clear container
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
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(renderWidget, 100);
    return () => clearTimeout(timer);
  }, [mounted, scriptLoaded, siteKey, theme, size, onVerify, onError, onExpire]);

  const handleRetry = () => {
    setStatus('loading');
    renderAttemptedRef.current = false;
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
        setStatus('ready');
      } catch {
        // Force re-render
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          widgetIdRef.current = null;
          setScriptLoaded(false);
          setTimeout(() => setScriptLoaded(true), 100);
        }
      }
    }
  };

  // Always render the same structure for SSR/hydration compatibility
  // Only show dynamic content after mount
  return (
    <div className={className}>
      {mounted && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => setScriptLoaded(true)}
          onError={() => setStatus('error')}
        />
      )}
      
      {/* Turnstile container - always rendered for consistent hydration */}
      <div 
        ref={containerRef} 
        className="flex justify-center min-h-[65px]"
      />
      
      {/* Status indicators - only shown after mount to prevent hydration mismatch */}
      {mounted && status === 'loading' && !scriptLoaded && (
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading security check...</span>
        </div>
      )}
      
      {mounted && status === 'verified' && (
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm mt-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Verified</span>
        </div>
      )}
      
      {mounted && status === 'error' && (
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
