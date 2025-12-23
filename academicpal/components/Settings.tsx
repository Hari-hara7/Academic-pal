'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User, updateProfile, updatePassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  User as UserIcon,
  Lock,
  Bell,
  Palette,
  Shield,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Camera,
  Save,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Moon,
  Sun,
  HardDrive,
  Mail,
  Smartphone,
  Globe,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const Settings = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [displayName, setDisplayName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  useEffect(() => {
    if (autoSave && user) {
      const settings = {
        emailNotifications,
        pushNotifications,
        darkMode,
        autoSave,
        lastSaved: new Date().toISOString()
      };
      
      localStorage.setItem('academicpal-settings', JSON.stringify(settings));
      
      const timeoutId = setTimeout(() => {
        if (autoSave) {
          const lastAutoSaveNotification = localStorage.getItem('lastAutoSaveNotification');
          const now = new Date().getTime();
          const shouldNotify = !lastAutoSaveNotification || 
            (now - parseInt(lastAutoSaveNotification)) > 300000;
          
          if (shouldNotify) {
            toast.success('Settings auto-saved', { duration: 1000 });
            localStorage.setItem('lastAutoSaveNotification', now.toString());
          }
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [emailNotifications, pushNotifications, darkMode, autoSave, user]);

  useEffect(() => {
    const savedSettings = localStorage.getItem('academicpal-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setEmailNotifications(settings.emailNotifications ?? true);
        setPushNotifications(settings.pushNotifications ?? true);
        setDarkMode(settings.darkMode ?? true);
        setAutoSave(settings.autoSave ?? true);
      } catch (error) {
        console.error('Failed to load saved settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || '');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setUpdating(true);
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!user) return;
    
    if (newPassword !== confirmPassword) {
      toast.error("New passwords don't match.");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setUpdating(true);
    try {
      await updatePassword(user, newPassword);
      
      toast.success("Password updated successfully!");
      
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const handleExportData = async () => {
    try {
      const exportPromise = new Promise(async (resolve, reject) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const userData = {
            profile: {
              displayName: user?.displayName || '',
              email: user?.email || '',
              photoURL: user?.photoURL || '',
              emailVerified: user?.emailVerified || false,
              creationTime: user?.metadata?.creationTime || '',
              lastSignInTime: user?.metadata?.lastSignInTime || ''
            },
            settings: {
              emailNotifications,
              pushNotifications,
              darkMode,
              autoSave,
              language: 'English (US)',
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            preferences: {
              theme: darkMode ? 'dark' : 'light',
              autoSave: autoSave,
              notifications: {
                email: emailNotifications,
                push: pushNotifications
              }
            },
            exportInfo: {
              exportDate: new Date().toISOString(),
              exportVersion: '1.0',
              dataFormat: 'JSON'
            }
          };

          const dataStr = JSON.stringify(userData, null, 2);
          const dataBlob = new Blob([dataStr], { type: 'application/json' });
          
          const url = window.URL.createObjectURL(dataBlob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `academicpal-data-${new Date().toISOString().split('T')[0]}.json`;
          
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          window.URL.revokeObjectURL(url);
          
          resolve('Data exported successfully!');
        } catch (error) {
          reject(error);
        }
      });

      toast.promise(exportPromise, {
        loading: 'Preparing your data export...',
        success: 'Data export complete! File downloaded successfully.',
        error: 'Failed to export data. Please try again.',
      });

    } catch (error) {
      console.error('Export error:', error);
      toast.error('Failed to export data. Please try again.');
    }
  };

  const handleDeleteAccount = async () => {
    toast.error("Account deletion is not available at the moment. Please contact support for assistance.");
  };

  const handleManualSave = () => {
    if (user) {
      const settings = {
        emailNotifications,
        pushNotifications,
        darkMode,
        autoSave,
        lastSaved: new Date().toISOString()
      };
      
      localStorage.setItem('academicpal-settings', JSON.stringify(settings));
      toast.success('Settings saved successfully!');
    }
  };

  const handleNotificationChange = (type: 'email' | 'push', value: boolean) => {
    if (type === 'email') {
      setEmailNotifications(value);
      toast.success(value ? 'Email notifications enabled' : 'Email notifications disabled');
    } else {
      setPushNotifications(value);
      toast.success(value ? 'Push notifications enabled' : 'Push notifications disabled');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-96 bg-black border-gray-800">
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <UserIcon className="h-16 w-16 text-gray-400" />
            <h2 className="text-xl font-semibold text-white">Not Authenticated</h2>
            <p className="text-gray-400 text-center">Please log in to access settings.</p>
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Go to Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-black border-b border-white/20 shadow-2xl">
        <div className="absolute inset-0 bg-blue-500/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="/dashboardd">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 h-10 w-10 sm:h-12 sm:w-12"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="p-2 sm:p-3 rounded-xl bg-blue-500 shadow-lg flex-shrink-0">
                <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Account Settings
                </h1>
                <p className="text-gray-400 mt-1 text-sm sm:text-base hidden sm:block">Manage your account preferences and security</p>
                <p className="text-gray-400 mt-1 text-xs sm:hidden">Manage preferences & security</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="profile" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 bg-black backdrop-blur-md border border-gray-700 rounded-xl p-1 shadow-2xl">
              <TabsTrigger 
                value="profile" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 hover:bg-blue-500/20"
              >
                <UserIcon className="h-4 w-4 mr-2 text-white" />
                <span className="hidden sm:inline text-white">Profile</span>
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 hover:bg-blue-500/20"
              >
                <Lock className="h-4 w-4 mr-2 text-white" />
                <span className="hidden sm:inline text-white">Security</span>
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 hover:bg-blue-500/20"
              >
                <Bell className="h-4 w-4 mr-2 text-white" />
                <span className="hidden sm:inline text-white">Notifications</span>
              </TabsTrigger>
              <TabsTrigger 
                value="preferences" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 hover:bg-blue-500/20"
              >
                <Palette className="h-4 w-4 mr-2 text-white" />
                <span className="hidden sm:inline text-white">Preferences</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-1 bg-black border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative group">
                      <Avatar className="h-24 w-24 ring-4 ring-blue-500 shadow-lg">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                        <AvatarFallback className="bg-blue-500 text-white text-2xl font-bold">
                          {user.displayName?.[0] || user.email?.[0] || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 border-2 border-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl text-white"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{user.displayName || 'User'}</h3>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                      <Badge className="bg-blue-500 text-white border-0 shadow-lg">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified Account
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-black border-gray-700 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500">
                      <UserIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">Profile Information</CardTitle>
                      <CardDescription className="text-gray-400">
                        Update your personal information and preferences
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="displayName" className="text-white font-medium">Display Name</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="Enter your display name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          value={user.email || ''}
                          disabled
                          className="bg-gray-800/30 border-gray-600 text-gray-400 pl-10"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Email cannot be changed for security reasons
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <Button 
                    onClick={handleUpdateProfile}
                    disabled={updating}
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white border-0 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {updating ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Updating...
                      </span>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="bg-bg-black border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Security Settings</CardTitle>
                    <CardDescription className="text-gray-400">
                      Update your password and manage account security
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Account Secured</span>
                    </div>
                    <p className="text-sm text-gray-400">Your account is protected with strong authentication</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Two-Factor Ready</span>
                    </div>
                    <p className="text-sm text-gray-400">Enable 2FA for additional security</p>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Change Password
                  </h3>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-white font-medium">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20 pr-10 transition-all duration-200"
                          placeholder="Enter new password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50 text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white font-medium">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  {newPassword && (
                    <div className="space-y-2">
                      <Label className="text-sm text-gray-400">Password Strength</Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-2 flex-1 rounded-full ${
                              newPassword.length >= level * 2
                                ? level <= 2
                                  ? 'bg-red-500'
                                  : level === 3
                                  ? 'bg-yellow-500'
                                  : 'bg-green-500'
                                : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">
                        {newPassword.length < 6 && 'Password must be at least 6 characters'}
                        {newPassword.length >= 6 && newPassword.length < 8 && 'Fair password strength'}
                        {newPassword.length >= 8 && newPassword.length < 12 && 'Good password strength'}
                        {newPassword.length >= 12 && 'Strong password'}
                      </p>
                    </div>
                  )}

                  <Button 
                    onClick={handleUpdatePassword}
                    disabled={updating || !newPassword || !confirmPassword || newPassword.length < 6}
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white border-0 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    {updating ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Updating...
                      </span>
                    ) : (
                      'Update Password'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-black border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500">
                    <Bell className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Notification Preferences</CardTitle>
                    <CardDescription className="text-gray-400">
                      Control how and when you receive notifications
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-600/20">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <Label className="text-white font-medium">Email Notifications</Label>
                        <p className="text-sm text-gray-400 mt-1">Receive important updates via email</p>
                      </div>
                    </div>
                    <Switch 
                      checked={emailNotifications}
                      onCheckedChange={(value) => handleNotificationChange('email', value)}
                      className="data-[state=checked]:bg-blue-500 shadow-lg"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Smartphone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <Label className="text-white font-medium">Push Notifications</Label>
                        <p className="text-sm text-gray-400 mt-1">Get real-time browser notifications</p>
                      </div>
                    </div>
                    <Switch 
                      checked={pushNotifications}
                      onCheckedChange={(value) => handleNotificationChange('push', value)}
                      className="data-[state=checked]:bg-blue-500 shadow-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Notification Categories</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">Account Updates</span>
                        </div>
                        <Switch defaultChecked className="data-[state=checked]:bg-blue-500" />
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">Feature Updates</span>
                        </div>
                        <Switch defaultChecked className="data-[state=checked]:bg-blue-500" />
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">Security Alerts</span>
                        </div>
                        <Switch defaultChecked className="data-[state=checked]:bg-blue-500" />
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">Marketing</span>
                        </div>
                        <Switch className="data-[state=checked]:bg-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-black border-gray-700 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500">
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">Appearance</CardTitle>
                      <CardDescription className="text-gray-400">
                        Customize your visual experience
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          {darkMode ? <Moon className="h-5 w-5 text-blue-400" /> : <Sun className="h-5 w-5 text-blue-400" />}
                        </div>
                        <div>
                          <Label className="text-white font-medium">Dark Mode</Label>
                          <p className="text-sm text-gray-400 mt-1">
                            {darkMode ? 'Using dark theme' : 'Using light theme'}
                          </p>
                        </div>
                      </div>
                      <Switch 
                        checked={darkMode}
                        onCheckedChange={(value) => {
                          setDarkMode(value);
                          toast.success(value ? 'Dark mode enabled' : 'Light mode enabled');
                        }}
                        className="data-[state=checked]:bg-blue-500 shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Zap className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <Label className="text-white font-medium">Auto Save</Label>
                          <p className="text-sm text-gray-400 mt-1">
                            {autoSave ? 'Settings are automatically saved' : 'Manual save required'}
                          </p>
                          {autoSave && (
                            <p className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Last saved: {new Date().toLocaleTimeString()}
                            </p>
                          )}
                        </div>
                      </div>
                      <Switch 
                        checked={autoSave}
                        onCheckedChange={(value) => {
                          setAutoSave(value);
                          toast.success(value ? 'Auto-save enabled' : 'Auto-save disabled');
                          if (value) {
                            const settings = {
                              emailNotifications,
                              pushNotifications,
                              darkMode,
                              autoSave: value,
                              lastSaved: new Date().toISOString()
                            };
                            localStorage.setItem('academicpal-settings', JSON.stringify(settings));
                          }
                        }}
                        className="data-[state=checked]:bg-blue-500 shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-600/20">
                          <Globe className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <Label className="text-white font-medium">Language</Label>
                          <p className="text-sm text-gray-400 mt-1">Choose your preferred language</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-lg">
                        English (US)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-700 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500">
                      <HardDrive className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">Data & Storage</CardTitle>
                      <CardDescription className="text-gray-400">
                        Manage your data and storage preferences
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-white font-medium">Storage Used</Label>
                        <span className="text-sm text-gray-400">2.4 GB / 10 GB</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '24%'}}></div>
                      </div>
                      <p className="text-xs text-gray-400">7.6 GB remaining</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium flex items-center gap-2">
                      <HardDrive className="h-4 w-4" />
                      Data Management
                    </h4>
                    <div className="space-y-2">
                      {!autoSave && (
                        <Button 
                          variant="outline" 
                          className="w-full justify-start bg-blue-500/20 border-blue-500/50 text-blue-300 hover:bg-blue-500/40 hover:text-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                          onClick={handleManualSave}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save Settings Manually
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        className="w-full justify-start bg-blue-500/20 border-blue-500/50 text-blue-300 hover:bg-blue-500/40 hover:text-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group"
                        onClick={handleExportData}
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                        Export My Data
                        <span className="ml-auto text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded border border-blue-500/30">JSON</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start bg-red-500/20 border-red-500/50 text-red-300 hover:bg-red-500/40 hover:text-red-200 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        onClick={handleDeleteAccount}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-white">Export Information</span>
                        </div>
                        <div className="text-xs text-gray-400 space-y-1">
                          <p>• Profile data and preferences</p>
                          <p>• Settings and configuration</p>
                          <p>• Account metadata</p>
                          <p>• Export timestamp</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Privacy
                    </h4>
                    <div className="p-3 rounded-lg bg-gray-800/30 border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">Analytics</span>
                        </div>
                        <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;

