'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Pages that don't require authentication
const publicRoutes = [
  '/',
  '/signup',
  '/login',
  '/register',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

// Pages that require authentication
const protectedRoutes = [
  '/home',
  '/chat',
  '/dashboard',
  '/upload',
  '/profile',
  '/settings',
  '/roadmaps',
  '/ai-assistant',
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // Handle route protection
      const isProtectedRoute = protectedRoutes.some(
        (route) => pathname === route || pathname?.startsWith(route + '/')
      );
      const isPublicRoute = publicRoutes.includes(pathname || '');

      if (!currentUser && isProtectedRoute) {
        // User is not logged in and trying to access protected route
        router.push('/signup');
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/home');
    } catch (error) {
      console.error('Google Sign-in Error:', error);
      throw error;
    }
  };

  const signInWithGitHub = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/home');
    } catch (error) {
      console.error('GitHub Sign-in Error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // Clear any stored tokens/cookies
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem('user');
      sessionStorage.clear();
      router.push('/signup');
    } catch (error) {
      console.error('Logout Error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signInWithGitHub,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
