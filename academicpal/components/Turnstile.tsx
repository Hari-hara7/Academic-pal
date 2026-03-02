'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

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
    turnstile: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
          'timeout-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'invisible';
          retry?: 'auto' | 'never';
          'retry-interval'?: number;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback?: () => void;
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if using test keys (bypass for localhost testing)
  const isTestKey = siteKey.startsWith('1x0000') || siteKey.startsWith('2x0000') || siteKey.startsWith('3x0000');

  const handleVerify = useCallback((token: string) => {
    setIsLoading(false);
    setHasError(false);
    onVerify(token);
  }, [onVerify]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  const handleExpire = useCallback(() => {
    setIsLoading(true);
    onExpire?.();
  }, [onExpire]);

  const handleTimeout = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    console.warn('Turnstile verification timed out, retrying...');
  }, []);

  useEffect(() => {
    // For test keys on localhost, auto-verify after a short delay
    if (isTestKey && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      const timer = setTimeout(() => {
        handleVerify('test-token-localhost');
      }, 500);
      return () => clearTimeout(timer);
    }

    // Load Turnstile script if not already loaded
    const scriptId = 'cf-turnstile-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        // Clear existing content
        containerRef.current.innerHTML = '';
        
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: handleVerify,
          'error-callback': handleError,
          'expired-callback': handleExpire,
          'timeout-callback': handleTimeout,
          theme,
          size,
          retry: 'auto',
          'retry-interval': 5000,
        });
        setIsLoading(true);
      }
    };

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      renderWidget();
    } else {
      script.addEventListener('load', renderWidget);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Widget might already be removed
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, handleVerify, handleError, handleExpire, handleTimeout, theme, size, isTestKey]);

  const retry = () => {
    if (widgetIdRef.current && window.turnstile) {
      setIsLoading(true);
      setHasError(false);
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  // Show test mode indicator on localhost
  if (isTestKey && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return (
      <div className={`${className} text-center`}>
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-400 text-sm">Test Mode - Auto Verified</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={containerRef} />
      {hasError && (
        <button
          type="button"
          onClick={retry}
          className="mt-2 text-sm text-blue-400 hover:text-blue-300 underline"
        >
          Verification failed. Click to retry
        </button>
      )}
    </div>
  );
}

// Hook for easy usage
export function useTurnstile() {
  const resetTurnstile = useCallback((widgetId: string) => {
    if (window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }, []);

  return { resetTurnstile };
}
