'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
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
import { Sparkles, ArrowRight, Shield, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", '500', '600', "700", "800", "900"],
  variable: "--font-inter",
});

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@nmamit\.in$/.test(email);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Signed in successfully with Google!');
      router.push('/home');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Google sign-in failed';
      toast.error('Google sign-in failed');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Signed in successfully with GitHub!');
      router.push('/home');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'GitHub sign-in failed';
      toast.error('GitHub sign-in failed');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid NMAMIT email.');
      toast.error('Invalid NMAMIT email.');
      return;
    }
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
      toast.success('Password reset email sent!');
    } catch {
      setError('Failed to send password reset email.');
      toast.error('Error sending password reset email.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isValidEmail(email)) {
      setError('Please enter a valid NMAMIT email.');
      toast.error('Invalid NMAMIT email.');
      setIsLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      router.push('/home');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      if (errorMessage.includes('wrong-password') || errorMessage.includes('user-not-found')) {
        setError('Incorrect credentials. Please sign up if you don&apos;t have an account.');
        toast.error('Incorrect credentials.');
      } else {
        setError(errorMessage);
        toast.error('Login failed.');
      }
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
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-6 lg:p-8 xl:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-6 xl:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4 xl:space-y-6">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black leading-tight tracking-tight text-white">
                Welcome back to your
                <span className="block mt-2 text-blue-500">Academic Journey</span>
              </h2>
              <p className="text-lg xl:text-xl 2xl:text-2xl text-white/70 leading-relaxed font-medium">
                Continue your path to academic excellence with AI-powered tools and personalized learning experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 xl:space-y-4">
              {[
                { icon: Shield, text: "Secure Google Integration" },
                { icon: Sparkles, text: "AI-Powered Study Tools" },
                { icon: BookOpen, text: "Personalized Learning Paths" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 xl:gap-5 p-4 xl:p-5 rounded-xl xl:rounded-2xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2.5 xl:p-3 bg-blue-500/20 rounded-lg xl:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 xl:w-6 xl:h-6 text-white/80" />
                  </div>
                  <span className="text-white/80 group-hover:text-white font-medium xl:text-lg transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 xl:gap-6 pt-4 xl:pt-6">
              {[
                { value: "4K+", label: "Students" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 xl:p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 group cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-2xl xl:text-3xl font-black text-white group-hover:text-blue-400"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs xl:text-sm text-white/60 group-hover:text-white/80 font-medium">
                    {stat.label}
                  </div>
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
                <motion.div variants={itemVariants} className="text-center space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Sign <span className="text-blue-500">In</span></h2>
                  <p className="text-white/60">Welcome back! Please sign in to continue</p>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl bg-white text-black border border-white/20 hover:bg-neutral-100 active:bg-neutral-200 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm hover:shadow"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <FcGoogle className="w-5 h-5" />
                    <span>Continue with Google</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl bg-white text-black border border-white/20 hover:bg-neutral-100 active:bg-neutral-200 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm hover:shadow"
                    onClick={handleGithubSignIn}
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

                <motion.form variants={itemVariants} onSubmit={handleLogin} className="space-y-5">
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
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-white/80">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 rounded-xl bg-black/40 border-white/20 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-white/40 pr-12 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                      >
                        {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                      </button>
                    </div>
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

                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                    >
                      <p className="text-emerald-300 text-sm">{message}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-white text-black hover:bg-neutral-100 active:bg-neutral-200 border border-white/20 font-semibold shadow-sm hover:shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                    )}
                  </Button>
                </motion.form>
              </CardContent>

              <CardFooter className="space-y-4 pt-6">
                <motion.div variants={itemVariants} className="w-full text-center space-y-3">
                  <button
                    onClick={handleForgotPassword}
                    className="text-sm text-white/70 hover:text-blue-400 underline-offset-4 hover:underline transition-colors"
                    disabled={isLoading}
                  >
                    Forgot your password?
                  </button>

                  <p className="text-sm text-white/60">
                    Don&apos;t have an account?{' '}
                    <Link
                      href="/signup"
                      className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 font-medium transition-colors"
                    >
                      Sign up here
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

export default Login;