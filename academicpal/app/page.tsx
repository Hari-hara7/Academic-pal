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
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.08),transparent_50%)]" />
        
        {/* Animated orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-500/4 rounded-full blur-3xl" 
        />
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen">
        {/* Left Side - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-6 lg:p-8 xl:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-6 xl:space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 xl:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="p-2.5 xl:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl xl:rounded-2xl shadow-lg shadow-blue-500/25"
              >
                <BookOpen className="w-7 h-7 xl:w-8 xl:h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AcademicPal
              </h1>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4 xl:space-y-6">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black leading-tight tracking-tight">
                Welcome back to your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                  Academic Journey
                </span>
              </h2>
              <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed font-medium">
                Continue your path to academic excellence with AI-powered tools and personalized learning experiences.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-3 xl:space-y-4">
              {[
                { icon: Shield, text: "Secure NMAMIT Integration", color: "from-blue-500/20 to-cyan-500/20" },
                { icon: Sparkles, text: "AI-Powered Study Tools", color: "from-purple-500/20 to-pink-500/20" },
                { icon: BookOpen, text: "Personalized Learning Paths", color: "from-emerald-500/20 to-teal-500/20" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 xl:gap-5 p-4 xl:p-5 rounded-xl xl:rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`p-2.5 xl:p-3 bg-gradient-to-r ${feature.color} rounded-lg xl:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 xl:w-6 xl:h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white font-medium xl:text-lg transition-colors duration-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 xl:gap-6 pt-4 xl:pt-6">
              {[
                { value: "4K+", label: "Students" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 xl:p-4 rounded-lg bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm group cursor-pointer"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="text-2xl xl:text-3xl font-black text-white group-hover:text-blue-400 transition-colors mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs xl:text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md"
          >
            <Card className="bg-black/80 backdrop-blur-sm border border-blue-500/30 shadow-2xl shadow-blue-500/10">
              <CardHeader className="space-y-4 pb-6">
                {/* Mobile Logo */}
                <motion.div variants={itemVariants} className="flex lg:hidden items-center justify-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AcademicPal
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Sign In</h2>
                  <p className="text-gray-400">Welcome back! Please sign in to continue</p>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Login Buttons */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-white/10 border-gray-600 hover:bg-white/20 text-white font-medium transition-all duration-300 group"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <FcGoogle className="mr-3 w-5 h-5" />
                    <span>Continue with Google</span>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-white/10 border-gray-600 hover:bg-white/20 text-white font-medium transition-all duration-300 group"
                    onClick={handleGithubSignIn}
                    disabled={isLoading}
                  >
                    <FaGithub className="mr-3 w-5 h-5" />
                    <span>Continue with GitHub</span>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </motion.div>

                {/* Divider */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full bg-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-4 text-gray-400 font-medium">Or continue with email</span>
                  </div>
                </motion.div>

                {/* Login Form */}
                <motion.form variants={itemVariants} onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                      NMAMIT Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.name@nmamit.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-gray-900/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 bg-gray-900/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500 pr-12 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
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
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                    >
                      <p className="text-green-400 text-sm">{message}</p>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </motion.form>
              </CardContent>

              <CardFooter className="space-y-4 pt-6">
                <motion.div variants={itemVariants} className="w-full text-center space-y-3">
                  <button
                    onClick={handleForgotPassword}
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    disabled={isLoading}
                  >
                    Forgot your password?
                  </button>
                  
                  <p className="text-sm text-gray-400">
                    Don&apos;t have an account?{' '}
                    <Link 
                      href="/signup" 
                      className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
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
