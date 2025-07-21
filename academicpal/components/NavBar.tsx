'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { GitStarButton } from "@/components/eldoraui/gitstarbutton";

import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Menu,
  Home,
  BookOpen,
  FileText,
  Info,
  Mail,
  LayoutDashboard,
  X,
  LogOut,
  Settings,
  User as UserIcon,
  ChevronDown,
} from 'lucide-react';

const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navLinks = [
    { href: '/home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '/login', label: 'Tools', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/upload', label: 'Resources', icon: <FileText className="w-4 h-4" /> },
    { href: '/register', label: 'Blog', icon: <FileText className="w-4 h-4" /> },
    { href: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
    { href: '/dashboardd', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans
      ${isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-black/90 backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative">
              <Image 
                src="/academicpal.jpg" 
                alt="Academicpal Logo" 
                width={48} 
                height={48} 
                className="rounded-xl transition-transform duration-300 group-hover:scale-105 lg:w-12 lg:h-12" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg lg:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-[Poppins]">
              Academic Pal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden lg:flex items-center gap-4">
          
            
            {loading ? (
              <Skeleton className="h-10 w-32 rounded-lg bg-gray-800" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 h-auto hover:bg-white/10 transition-colors">
                    <Avatar className="h-8 w-8 ring-2 ring-white/20">
                      <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                        {user.displayName?.[0] || user.email?.[0] || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-white truncate max-w-[120px]">
                        {user.displayName || 'User'}
                      </span>
                      <span className="text-xs text-gray-400 truncate max-w-[120px]">
                        {user.email}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/95 backdrop-blur-md border-gray-800">
                  <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <Link href="/profile">
                    <DropdownMenuItem className="text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer w-full">
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem className="text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="text-red-400 hover:bg-red-500/10 hover:text-red-300 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-2 font-medium transition-all duration-200 hover:scale-105">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {!loading && user && (
              <Avatar className="h-8 w-8 ring-2 ring-white/20">
                <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                  {user.displayName?.[0] || user.email?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
            )}
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-colors">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="bg-black/95 backdrop-blur-md text-white w-80 p-0 border-r border-gray-800">
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Mobile Header */}
                  <div className="p-6 border-b border-gray-800">
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-full bg-gray-800" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24 bg-gray-800" />
                          <Skeleton className="h-3 w-32 bg-gray-800" />
                        </div>
                      </div>
                    ) : user ? (
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 ring-2 ring-white/20">
                          <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {user.displayName?.[0] || user.email?.[0] || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-lg font-semibold text-white truncate">
                            {user.displayName || 'User'}
                          </p>
                          <p className="text-sm text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Link href="/">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-medium">
                          Login
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* GitHub Star Button - Mobile */}
                  <div className="p-6 border-b border-gray-800">
                    <GitStarButton />
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="font-medium text-sm">{link.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile User Actions */}
                  {user && (
                    <div className="p-6 border-t border-gray-800 space-y-2">
                      <Link href="/profile">
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10"
                        >
                          <UserIcon className="mr-3 h-4 w-4" />
                          Profile
                        </Button>
                      </Link>
                      <Link href="/settings">
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10"
                        >
                          <Settings className="mr-3 h-4 w-4" />
                          Settings
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        onClick={handleSignOut}
                        className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <LogOut className="mr-3 h-4 w-4" />
                        Sign out
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;