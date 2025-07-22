'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import {
  User as UserIcon,
  ArrowLeft,
  Save,
  Camera,
  CheckCircle,
  Mail,
  Calendar,
  Shield,
  MapPin,
  Phone,
  Globe,
  Edit3,
  Clock,
  Verified,
} from 'lucide-react';
import Link from 'next/link';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || '');
        // Load additional profile data from localStorage if available
        const savedProfile = localStorage.getItem(`profile-${currentUser.uid}`);
        if (savedProfile) {
          try {
            const profile = JSON.parse(savedProfile);
            setBio(profile.bio || '');
            setLocation(profile.location || '');
            setWebsite(profile.website || '');
            setPhone(profile.phone || '');
          } catch (error) {
            console.error('Failed to load saved profile:', error);
          }
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setUpdating(true);
    try {
      // Update Firebase profile
      await updateProfile(user, {
        displayName: displayName,
      });

      // Save additional profile data to localStorage
      const profileData = {
        bio,
        location,
        website,
        phone,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`profile-${user.uid}`, JSON.stringify(profileData));
      
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center">
        <Card className="w-96 bg-gray-900 border-gray-800">
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <UserIcon className="h-16 w-16 text-gray-400" />
            <h2 className="text-xl font-semibold text-white">Not Authenticated</h2>
            <p className="text-gray-400 text-center">Please log in to view your profile.</p>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
      {/* Enhanced Header */}
      <div className="relative bg-black border-b border-gray-700 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="/dashboardd">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-gray-700 hover:border-gray-600 h-10 w-10 sm:h-12 sm:w-12"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg flex-shrink-0">
                <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                  My Profile
                </h1>
                <p className="text-gray-400 mt-1 text-sm sm:text-base hidden sm:block">Manage your personal information and preferences</p>
                <p className="text-gray-400 mt-1 text-xs sm:hidden">Manage your info & preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1 bg-black border-gray-700 shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Avatar Section */}
                <div className="relative group">
                  <Avatar className="h-32 w-32 ring-4 ring-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                    <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold">
                      {user.displayName?.[0] || user.email?.[0] || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-2 border-gray-900 shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    <Camera className="h-5 w-5" />
                  </Button>
                </div>

                {/* User Info */}
                <div className="space-y-3 w-full">
                  <h2 className="text-2xl font-bold text-white">{user.displayName || 'User'}</h2>
                  <p className="text-gray-400">{user.email}</p>
                  
                  {/* Status Badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-lg">
                      <Verified className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                    {user.emailVerified && (
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-lg">
                        <Mail className="h-3 w-3 mr-1" />
                        Email Verified
                      </Badge>
                    )}
                  </div>

                  {/* Bio */}
                  {bio && (
                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                      <p className="text-sm text-gray-300 italic">&ldquo;{bio}&rdquo;</p>
                    </div>
                  )}
                </div>

                {/* Edit Profile Button */}
                <Button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <Card className="bg-black border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <UserIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Account Information</CardTitle>
                    <CardDescription className="text-gray-400">
                      Your account details and registration information
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-black border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-medium text-white">Member Since</span>
                      </div>
                      <p className="text-gray-300">{formatDate(user.metadata?.creationTime)}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-black border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium text-white">Last Sign In</span>
                      </div>
                      <p className="text-gray-300">{formatDate(user.metadata?.lastSignInTime)}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-black border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-4 w-4 text-orange-400" />
                        <span className="text-sm font-medium text-white">Account Status</span>
                      </div>
                      <p className="text-green-400 font-medium">Active & Verified</p>
                    </div>

                    <div className="p-4 rounded-lg bg-black border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-medium text-white">Email Status</span>
                      </div>
                      <p className={user.emailVerified ? "text-green-400 font-medium" : "text-yellow-400 font-medium"}>
                        {user.emailVerified ? 'Verified' : 'Pending Verification'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Editable Profile Information */}
            <Card className="bg-black border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                      <Edit3 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">Personal Information</CardTitle>
                      <CardDescription className="text-gray-400">
                        Update your personal details and contact information
                      </CardDescription>
                    </div>
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
                      disabled={!isEditing}
                      className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 disabled:opacity-60"
                      placeholder="Enter your display name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white font-medium">Location</Label>
                    <div className="relative">
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 pl-10 transition-all duration-200 disabled:opacity-60"
                        placeholder="Your location"
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white font-medium">Website</Label>
                    <div className="relative">
                      <Input
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 pl-10 transition-all duration-200 disabled:opacity-60"
                        placeholder="https://yourwebsite.com"
                      />
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-medium">Phone</Label>
                    <div className="relative">
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 pl-10 transition-all duration-200 disabled:opacity-60"
                        placeholder="Your phone number"
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white font-medium">Bio</Label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 disabled:opacity-60 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {isEditing && (
                  <>
                    <Separator className="bg-gray-700" />
                    <div className="flex gap-3">
                      <Button 
                        onClick={handleUpdateProfile}
                        disabled={updating}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {updating ? (
                          <span className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Saving...
                          </span>
                        ) : (
                          'Save Changes'
                        )}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700/50"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
