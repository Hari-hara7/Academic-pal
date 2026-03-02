'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Clock, ChevronRight, Target } from 'lucide-react';
import Link from 'next/link';

interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  steps: number;
}

// Placeholder roadmaps data
const placeholderRoadmaps: Roadmap[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend technologies to become a complete developer.',
    category: 'Web Development',
    difficulty: 'intermediate',
    duration: '6 months',
    steps: 12,
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    description: 'Essential concepts for coding interviews and competitive programming.',
    category: 'Computer Science',
    difficulty: 'beginner',
    duration: '3 months',
    steps: 15,
  },
  {
    id: '3',
    title: 'Machine Learning',
    description: 'From basics to advanced ML concepts with hands-on projects.',
    category: 'AI/ML',
    difficulty: 'advanced',
    duration: '4 months',
    steps: 10,
  },
  {
    id: '4',
    title: 'React.js Mastery',
    description: 'Deep dive into React ecosystem including hooks, state management, and testing.',
    category: 'Frontend',
    difficulty: 'intermediate',
    duration: '2 months',
    steps: 8,
  },
];

const difficultyColors = {
  beginner: 'text-green-400 bg-green-500/20',
  intermediate: 'text-yellow-400 bg-yellow-500/20',
  advanced: 'text-red-400 bg-red-500/20',
};

export default function RoadmapList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(placeholderRoadmaps.map((r) => r.category))];

  const filteredRoadmaps = placeholderRoadmaps.filter((roadmap) => {
    const matchesSearch =
      roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || roadmap.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search roadmaps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black/50 border-white/20 text-white"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'bg-blue-600' : 'border-white/20'}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-blue-600' : 'border-white/20'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Roadmap Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredRoadmaps.map((roadmap) => (
          <Card
            key={roadmap.id}
            className="bg-black/50 border-white/20 p-5 hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm text-gray-400">{roadmap.category}</span>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${difficultyColors[roadmap.difficulty]}`}
              >
                {roadmap.difficulty}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {roadmap.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{roadmap.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {roadmap.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {roadmap.steps} steps
                </span>
              </div>
              <Link href={`/roadmaps/${roadmap.id}`}>
                <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                  View
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredRoadmaps.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No roadmaps found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
