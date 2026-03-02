'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import Turnstile from '@/components/Turnstile';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!turnstileToken) {
      setError('Please complete the verification');
      toast.error('Please complete the verification');
      return;
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, turnstileToken }),
    });

    if (res.ok) {
      toast.success('Registration successful!');
      router.push('/login');
    } else {
      const { message } = await res.json();
      setError(message);
      toast.error(message || 'Registration failed');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <Card className="w-full max-w-md border border-white/40 bg-black/50 backdrop-blur-md text-white shadow-lg">
        <CardHeader className="flex flex-col items-center gap-2">
          <Image
            src="/academicpal.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="mb-2"
          />
          <h2 className="text-3xl font-semibold">Create an Account</h2>
          <p className="text-sm text-white/60 font-montserrat">Join us today</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border border-white/20 text-white placeholder-white/40 focus-visible:ring-white"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-transparent border border-white/20 text-white placeholder-white/40 focus-visible:ring-white"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="bg-transparent border border-white/20 text-white placeholder-white/40 focus-visible:ring-white"
              required
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            
            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                onVerify={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken('')}
                theme="dark"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/80 transition-colors"
              disabled={!turnstileToken}
            >
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center text-sm text-white/50">
          Already have an account?
          <Link
            href="/login"
            className="ml-1 underline text-white hover:text-yellow-400 transition"
          >
            Login here
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}

