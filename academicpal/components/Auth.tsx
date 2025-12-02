'use client';

import { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { FaGoogle, FaCommentAlt, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'motion/react';

interface AuthProps {
  setUser: (user: any) => void;
}

const Auth = ({ setUser }: AuthProps) => {
  const [text, setText] = useState('');
  const welcomeMessage = 'Welcome to Academic Pal Chat!';

  useEffect(() => {
    let index = 0;
    let animationFrameId: number;

    const animateText = () => {
      setText(welcomeMessage.slice(0, index + 1));
      index++;
      if (index < welcomeMessage.length) {
        animationFrameId = window.setTimeout(animateText, 50);
      }
    };

    setText('');
    animationFrameId = window.setTimeout(animateText, 200);
    return () => clearTimeout(animationFrameId);
  }, []);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleProtectedAction = () => {
    alert('Please sign in with Google to continue.');
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden">
      {}
      <div className="absolute inset-0 -z-10 bg-black" />

      {}
      <div className="absolute top-10 left-5 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-5 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />

      {}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl px-6 sm:px-10 py-8 sm:py-12 space-y-8">
            {}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
              <span className="text-white drop-shadow-lg">
                {text}
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Discover, discuss, and access{' '}
              <span className="font-semibold text-blue-400">
                powerful academic resources
              </span>{' '}
              with ease.
            </p>

            {}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={signIn}
              className="relative w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold 
                         bg-blue-500 text-white shadow-lg 
                         border border-white/20 backdrop-blur-sm
                         transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              <FaGoogle className="text-lg sm:text-xl" />
              Continue with Google
            </motion.button>

            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleProtectedAction}
                className="relative w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold
                           bg-white/10 text-white border border-white/20 backdrop-blur-md
                           shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <FaCommentAlt className="text-base sm:text-lg" />
                Start Chat
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleProtectedAction}
                className="relative w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold
                           bg-white/10 text-white border border-white/20 backdrop-blur-md
                           shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <FaQuestionCircle className="text-base sm:text-lg" />
                Ask
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Auth;

