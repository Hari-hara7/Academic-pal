'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { toast } from 'sonner';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('🎉 Signed up with Google successfully!');
      router.push('/home');
    } catch (err: any) {
      setError(err.message);
      toast.error(`❌ ${err.message}`);
    }
  };

  const handleGithubSignUp = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('🎉 Signed up with GitHub successfully!');
      router.push('/home');
    } catch (err: any) {
      setError(err.message);
      toast.error(`❌ ${err.message}`);
    }
  };

  const isValidEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@nmamit\.in$/.test(email);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError('You must accept the Terms & Conditions to continue.');
      toast.error('⚠️ You must accept the Terms & Conditions.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid NMAMIT email.');
      toast.error('⚠️ Enter a valid NMAMIT email.');
      return;
    }

    if (!name.trim() || !usn.trim()) {
      setError('Please enter your full name and USN.');
      toast.error('⚠️ Name and USN are required.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('✅ Registration successful!');
      router.push('/');
    } catch (err: any) {
      setError(err.message);
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <Card className="w-full max-w-md bg-dark-900 text-white">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Sign up for Academic Pal</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="mr-2" />
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
              onClick={handleGithubSignUp}
            >
              <FaGithub className="mr-2" />
              Sign up with GitHub
            </Button>
          </div>

          <div className="my-6 flex items-center">
            <Separator className="flex-1 bg-gray-600" />
            <span className="mx-4 text-gray-400">OR</span>
            <Separator className="flex-1 bg-gray-600" />
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-800 text-white border border-zinc-700 mt-4"
                required
              />
            </div>
            <div>
              <Label htmlFor="usn">USN</Label>
              <Input
                id="usn"
                type="text"
                placeholder="Enter your USN"
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                className="bg-zinc-800 text-white border border-zinc-700 mt-4"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your NMAMIT email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-800 text-white border border-zinc-700 mt-4"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 text-white border border-zinc-700 mt-4"
                required
              />
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{' '}
                <Link href="/terms-and-conditions" className="underline text-blue-400 hover:text-blue-300">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
              disabled={!acceptTerms}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm font-lato text-base">
            Already have an account?{' '}
            <Link href="/" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
