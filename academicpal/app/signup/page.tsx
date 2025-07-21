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
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, BookOpen, Users, Star } from 'lucide-react';
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
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center justify-center p-8 xl:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg xl:max-w-xl space-y-6 xl:space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl xl:text-5xl font-black leading-tight">
                Start your journey to
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Academic Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of students transforming their academic journey with AI-powered study tools and personalized learning paths.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: Shield, text: "Secure NMAMIT Integration" },
                { icon: Users, text: "Join 4,000+ Students" },
                { icon: Sparkles, text: "AI-Powered Study Tools" },
                { icon: Star, text: "Top-Rated Platform" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Sign Up Form */}
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
                  
                </motion.div>

                <motion.div variants={itemVariants} className="text-center space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Create Account</h2>
                  <p className="text-gray-400">Join the academic revolution today</p>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Sign Up Buttons */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-white/10 border-gray-600 hover:bg-white/20 text-white font-medium transition-all duration-300 group"
                    onClick={handleGoogleSignUp}
                    disabled={isLoading}
                  >
                    <FcGoogle className="mr-3 w-5 h-5" />
                    <span>Continue with Google</span>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-white/10 border-gray-600 hover:bg-white/20 text-white font-medium transition-all duration-300 group"
                    onClick={handleGithubSignUp}
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

                {/* Sign Up Form */}
                <motion.form variants={itemVariants} onSubmit={handleSignUp} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 bg-gray-900/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usn" className="text-sm font-medium text-gray-300">
                      USN
                    </Label>
                    <Input
                      id="usn"
                      type="text"
                      placeholder="Enter your USN"
                      value={usn}
                      onChange={(e) => setUsn(e.target.value)}
                      className="h-12 bg-gray-900/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>

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
                      disabled={isLoading}
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
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 bg-gray-900/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500 pr-12 transition-all"
                        required
                        disabled={isLoading}
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

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="w-4 h-4 mt-1 rounded border-gray-600 bg-gray-900/50 text-blue-600 focus:ring-blue-500/20 transition-all duration-300"
                      disabled={isLoading}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed">
                      I agree to the{' '}
                      <Link href="/terms-and-conditions" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                        Terms & Conditions
                      </Link>
                      {' '}and{' '}
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
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                    disabled={!acceptTerms || isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </motion.form>
              </CardContent>

              <CardFooter className="space-y-4 pt-6">
                <motion.div variants={itemVariants} className="w-full text-center space-y-3">
                  <p className="text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link 
                      href="/" 
                      className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
                    >
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
