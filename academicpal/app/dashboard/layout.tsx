'use client';

import { ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Menu, Home, Calendar, LogOut, BookOpen, ClipboardList,
  BellRing, BarChart2, GraduationCap
} from 'lucide-react';
import { FaProjectDiagram, FaPenNib, FaUsers, FaComments } from 'react-icons/fa';
import { Toaster, toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const notifiedIdsRef = useRef<Set<string>>(new Set());

  // Request notification permission on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  }, []);

  // Check for due reminders
  const checkReminders = useCallback(async () => {
    try {
      const res = await fetch('/api/study-reminders/get');
      const data = await res.json();
      
      if (data.success && data.reminders) {
        const now = new Date().getTime();
        
        data.reminders.forEach((reminder: { _id: string; title: string; description?: string; remindAt: string }) => {
          const remindTime = new Date(reminder.remindAt).getTime();
          const timeDiff = remindTime - now;
          
          // Check if reminder is due (within 1 minute window) and not already notified
          if (timeDiff >= -60000 && timeDiff <= 60000 && !notifiedIdsRef.current.has(reminder._id)) {
            notifiedIdsRef.current.add(reminder._id);
            
            // Show toast notification in-app
            toast.info(`⏰ Reminder: ${reminder.title}`, {
              description: reminder.description || 'Time for your scheduled task!',
              duration: 10000,
            });
            
            // Show browser notification if permitted
            if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
              new Notification(`⏰ Reminder: ${reminder.title}`, {
                body: reminder.description || 'Time for your scheduled task!',
                icon: '/icons/icon-192x192.png',
                tag: reminder._id,
              });
            }
          }
        });
      }
    } catch (error) {
      console.error('Error checking reminders:', error);
    }
  }, []);

  // Poll for reminders every 30 seconds
  useEffect(() => {
    checkReminders(); // Check immediately on mount
    const interval = setInterval(checkReminders, 30000);
    return () => clearInterval(interval);
  }, [checkReminders]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      // Clear any stored data
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem('user');
      sessionStorage.clear();
      router.push('/signup');
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggingOut(false);
    }
  };

  const navItems = [
    { href: '/dashboard', icon: <Home className="h-4 w-4" />, label: 'Home' },
    { href: '/dashboard/timetable', icon: <Calendar className="h-4 w-4" />, label: 'Timetable' },
    { href: '/dashboard/flashcards', icon: <BookOpen className="h-4 w-4" />, label: 'Flashcards' },
    { href: '/dashboard/study-planner', icon: <ClipboardList className="h-4 w-4" />, label: 'Study Planner' },
    { href: '/dashboard/performance-analytics', icon: <BarChart2 className="h-4 w-4" />, label: 'Analytics' },
    { href: '/dashboard/study-reminders', icon: <BellRing className="h-4 w-4" />, label: 'Reminders' },
    { href: '/dashboard/blogs', icon: <FaPenNib className="h-4 w-4" />, label: 'Blogs' },
    { href: '/dashboard/study-groups', icon: <FaUsers className="h-4 w-4" />, label: 'Groups' },
    { href: '/dashboard/mind-map', icon: <FaProjectDiagram className="h-4 w-4" />, label: 'Mind-map' },
    { href: '/dashboard/forum', icon: <FaComments className="h-4 w-4" />, label: 'Forum' },
    { href: '/dashboard/tutoring', icon: <GraduationCap className="h-4 w-4" />, label: 'Tutoring' },
  ];

   
  const filteredItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-black text-white relative overflow-hidden">
      <Toaster position="top-center" richColors />

      <div className="lg:hidden fixed top-5 left-5 z-50 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="bg-black text-white border border-white hover:bg-white hover:text-black"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

    
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-black border-r border-white/20 transition-transform duration-300 ease-in-out p-6 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-tight mt-16 font-poppins">
          Academic <span className="text-blue-400">Pal</span>
        </h1>

      
        <Input
          placeholder="Search components..."
          className="mb-4 bg-transparent text-white border-white placeholder-white focus-visible:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <nav className="space-y-2">
          {filteredItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white hover:text-black transition"
              onClick={() => setIsSidebarOpen(false)}
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}

          <div className="pt-6">
            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center gap-2 bg-white text-black hover:bg-gray-200"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut className="h-4 w-4" />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </Button>
          </div>
        </nav>
      </aside>

      <div className="hidden lg:block fixed top-0 left-64 h-full w-[1px] bg-white/20 z-30"></div>

      <main className="flex-1 px-6 py-10 mt-16 lg:mt-0 lg:ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

