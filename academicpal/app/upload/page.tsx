'use client';

import React, { useState } from 'react';
import { FaGoogle, FaUpload, FaLock, FaEye, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import Home from '@/components/Home';
import AdminPanel from '@/components/AdminPanel';

const UploadPage = () => {
  const { user, signInWithGoogle, signOutUser } = useFirebaseAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden font-sans text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black-900 via-black to-blue-900 animate-gradient-x" />
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/academicpal.jpg" alt="Logo" width={40} height={40} className="rounded-full shadow-md" />
          <h1 className="text-lg sm:text-xl font-bold">Academic Pal</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm sm:text-base text-gray-300">{user.displayName}</span>
              <button
                onClick={signOutUser}
                className="px-5 py-2 rounded-full text-sm sm:text-base font-medium bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition-all shadow-lg"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="px-5 py-2 rounded-full text-sm sm:text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
            >
              <FaGoogle className="text-base" />
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 right-4 bg-black/95 backdrop-blur-lg text-white w-56 rounded-xl shadow-lg p-4 sm:hidden z-50"
          >
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={user.photoURL}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-400"
                  />
                  <span className="text-sm">{user.displayName}</span>
                </div>
                <button
                  onClick={signOutUser}
                  className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-sm hover:opacity-90 transition-all"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <FaGoogle />
                Sign In
              </button>
            )}
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      {user && (
        <section className="text-center py-12 sm:py-16 md:py-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Welcome, {user.displayName}!
            <motion.span
              className="inline-block ml-2"
              whileHover={{ scale: 1.2, rotate: 15, color: '#ff00ff' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaHandshake className="inline-block" />
            </motion.span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto">
            Let’s get started! Upload your resources and help others in the academic community.
          </p>
        </section>
      )}

      {/* Admin Panel */}
      {user?.email?.endsWith('@nmamit.in') && <AdminPanel user={user} />}

      {/* Features Section */}
      <main className="mt-8 px-4 sm:px-6 md:px-10 flex-1">
        {!user && (
          <section className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <FaLock className="text-blue-400 text-3xl sm:text-4xl mr-3" />,
                  title: 'How to Use This Website',
                  desc: 'Upload and manage resources easily. Share valuable content securely with Google sign-in.',
                },
                {
                  icon: <FaUpload className="text-green-400 text-3xl sm:text-4xl mr-3" />,
                  title: 'How It Helps Students',
                  desc: 'Shared resources help the student community by making valuable study material accessible.',
                },
                {
                  icon: <FaEye className="text-yellow-400 text-3xl sm:text-4xl mr-3" />,
                  title: 'Public Access',
                  desc: 'Make resources public so that everyone has access to crucial educational content.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        <Home />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-xs sm:text-sm border-t border-white/10 backdrop-blur-md">
        &copy; {new Date().getFullYear()} Academic Pal. All rights reserved.
      </footer>
    </div>
  );
};

export default UploadPage;
