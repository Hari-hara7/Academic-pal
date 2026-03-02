/**
 * Cloudflare Turnstile Server-Side Verification
 * 
 * This utility verifies Turnstile tokens on the server side.
 * Make sure to set TURNSTILE_SECRET_KEY in your environment variables.
 */

interface TurnstileVerifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
  action?: string;
  cdata?: string;
}

export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not set in environment variables');
    // In development, you might want to return true for testing
    if (process.env.NODE_ENV === 'development') {
      console.warn('Skipping Turnstile verification in development mode');
      return true;
    }
    return false;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data: TurnstileVerifyResponse = await response.json();
    
    if (!data.success) {
      console.error('Turnstile verification failed:', data['error-codes']);
    }
    
    return data.success;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
}

/**
 * Error codes from Cloudflare Turnstile:
 * - missing-input-secret: The secret parameter was not passed
 * - invalid-input-secret: The secret parameter was invalid
 * - missing-input-response: The response parameter was not passed
 * - invalid-input-response: The response parameter is invalid or has expired
 * - bad-request: The request was rejected because it was malformed
 * - timeout-or-duplicate: The response parameter has already been validated before
 * - internal-error: An internal error happened while validating
 */
