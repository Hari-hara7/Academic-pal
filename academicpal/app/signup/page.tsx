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
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Shield, BookOpen, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('🎉 Signed up with Google successfully!');
      router.push('/home');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignUp = async () => {
    setIsLoading(true);
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('🎉 Signed up with GitHub successfully!');
      router.push('/home');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@nmamit\.in$/.test(email);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!acceptTerms) {
      setError('You must accept the Terms & Conditions to continue.');
      toast.error('⚠️ You must accept the Terms & Conditions.');
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid NMAMIT email.');
      toast.error('⚠️ Enter a valid NMAMIT email.');
      setIsLoading(false);
      return;
    }

    if (!name.trim() || !usn.trim()) {
      setError('Please enter your full name and USN.');
      toast.error('⚠️ Name and USN are required.');
      setIsLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('✅ Registration successful!');
      router.push('/');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white overflow-hidden relative`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.035),transparent_55%)]" />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-6 lg:p-8 xl:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg xl:max-w-xl space-y-6 xl:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight text-white">
                Start your journey to
                <span className="block mt-2 text-blue-500">Academic Excellence</span>
              </h2>
              <p className="text-lg xl:text-xl text-white/70 leading-relaxed font-medium">
                Join thousands of students transforming their academic journey with AI-powered study tools and personalized learning paths.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              {[
                { icon: Shield, text: 'Secure Google Integration' },
                { icon: Users, text: 'Join 4,000+ Students' },
                { icon: Sparkles, text: 'AI-Powered Study Tools' },
                { icon: Star, text: 'Top-Rated Platform' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2.5 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white/80 group-hover:text-white font-medium transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md"
          >
            <Card className="bg-black/70 backdrop-blur-sm border border-white/15 shadow-2xl shadow-white/5">
              <CardHeader className="space-y-4 pb-6">
                <motion.div variants={itemVariants} className="flex lg:hidden items-center justify-center gap-3 mb-4"></motion.div>
                <motion.div variants={itemVariants} className="text-center space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Create <span className="text-blue-500">Account</span></h2>
                  <p className="text-white/60">Join the academic revolution today</p>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl bg-white text-black border border-white/20 hover:bg-neutral-100 active:bg-neutral-200 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm hover:shadow"
                    onClick={handleGoogleSignUp}
                    disabled={isLoading}
                  >
                    <FcGoogle className="w-5 h-5" />
                    <span>Continue with Google</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl bg-white text-black border border-white/20 hover:bg-neutral-100 active:bg-neutral-200 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm hover:shadow"
                    onClick={handleGithubSignUp}
                    disabled={isLoading}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Continue with GitHub</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full bg-white/15" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-4 text-white/60 font-medium">Or continue with email</span>
                  </div>
                </motion.div>

                <motion.form variants={itemVariants} onSubmit={handleSignUp} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-white/80">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 rounded-xl bg-black/40 border-white/20 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-white/40 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usn" className="text-sm font-medium text-white/80">
                      USN
                    </Label>
                    <Input
                      id="usn"
                      type="text"
                      placeholder="Enter your USN"
                      value={usn}
                      onChange={(e) => setUsn(e.target.value)}
                      className="h-12 rounded-xl bg-black/40 border-white/20 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-white/40 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-white/80">
                      NMAMIT Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="usn@nmamit.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl bg-black/40 border-white/20 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-white/40 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-white/80">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 rounded-xl bg-black/40 border-white/20 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-white/40 pr-12 transition-all"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="w-4 h-4 mt-1 rounded border-white/20 bg-black/40 text-black focus:ring-white/20 transition-all duration-300"
                      disabled={isLoading}
                    />
                    <label htmlFor="terms" className="text-sm text-white/70 leading-relaxed">
                      I agree to the{' '}
                      <Link href="/terms-and-conditions" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <p className="text-red-300 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-white text-black hover:bg-neutral-100 active:bg-neutral-200 border border-white/20 font-semibold shadow-sm hover:shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!acceptTerms || isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                    )}
                  </Button>
                </motion.form>
              </CardContent>

              <CardFooter className="space-y-4 pt-6">
                <motion.div variants={itemVariants} className="w-full text-center space-y-3">
                  <p className="text-sm text-white/60">
                    Already have an account?{' '}
                    <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 font-medium transition-colors">
                      Sign in here
                    </Link>
                  </p>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

