'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
  Map,
  UploadCloud,
  FileStack,
  MessageSquareHeart,
  Briefcase,
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import RoadmapForm from '@/components/RoadmapForm';
import RoadmapList from '@/components/RoadmapList';
import FeedbackForm from '@/components/FeedbackForm';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function RoadmapsPage() {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('browse');

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative px-6 py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5" />
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mg-top">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Map className="w-10 h-10 text-blue-500" />
                  <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mg">
                    Tech Roadmaps
                  </h1>
                </div>
                <p className="text-gray-400 text-lg max-w-xl">
                  Curated learning paths to help you master any technology. From beginner to expert.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-2 mx-auto">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-400">Roadmaps</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-2 mx-auto">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-2 mx-auto">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-sm text-gray-400">Progress</p>
                </div>
              </div>
            </div>

            {/* Placement Prep CTA */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/30 to-black border border-blue-500/30 rounded-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Placement Preparation</h3>
                    <p className="text-sm text-gray-400">
                      Interview prep, company insights & career guidance
                    </p>
                  </div>
                </div>
                <Link href="/placements">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Explore Placements
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex justify-start gap-2 bg-transparent mb-8">
                <TabsTrigger
                  value="browse"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 data-[state=active]:bg-blue-600 data-[state=active]:text-white border border-white/20 data-[state=active]:border-blue-500"
                >
                  <FileStack className="w-4 h-4" />
                  Browse Roadmaps
                </TabsTrigger>
                {isAdmin && (
                  <TabsTrigger
                    value="upload"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 data-[state=active]:bg-blue-600 data-[state=active]:text-white border border-white/20 data-[state=active]:border-blue-500"
                  >
                    <UploadCloud className="w-4 h-4" />
                    Upload New
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="feedback"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 data-[state=active]:bg-blue-600 data-[state=active]:text-white border border-white/20 data-[state=active]:border-blue-500"
                >
                  <MessageSquareHeart className="w-4 h-4" />
                  Feedback
                </TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="mt-0">
                <RoadmapList />
              </TabsContent>

              {isAdmin && (
                <TabsContent value="upload" className="mt-0">
                  <div className="max-w-2xl mx-auto">
                    <RoadmapForm />
                  </div>
                </TabsContent>
              )}

              <TabsContent value="feedback" className="mt-0">
                <div className="max-w-xl mx-auto">
                  <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquareHeart className="w-5 h-5 text-blue-400" />
                      <h2 className="text-xl font-semibold text-white">Share Your Feedback</h2>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                      Help us improve our roadmaps by sharing your suggestions and feedback.
                    </p>
                    <FeedbackForm />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}

