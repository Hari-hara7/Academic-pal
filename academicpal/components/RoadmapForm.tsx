'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UploadCloud, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function RoadmapForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'beginner',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement API call to save roadmap
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Roadmap created successfully!');
      setFormData({
        title: '',
        description: '',
        category: '',
        difficulty: 'beginner',
        content: '',
      });
    } catch (error) {
      toast.error('Failed to create roadmap');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-white">
          Roadmap Title
        </Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g., Full Stack Development"
          className="bg-black/50 border-white/20 text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">
          Description
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Brief description of what this roadmap covers..."
          className="bg-black/50 border-white/20 text-white min-h-[100px]"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category" className="text-white">
            Category
          </Label>
          <Input
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="e.g., Web Development"
            className="bg-black/50 border-white/20 text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty" className="text-white">
            Difficulty
          </Label>
          <select
            id="difficulty"
            value={formData.difficulty}
            onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
            className="w-full h-10 px-3 bg-black/50 border border-white/20 text-white rounded-md"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-white">
          Roadmap Content (Markdown)
        </Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="# Step 1: Learn the basics..."
          className="bg-black/50 border-white/20 text-white min-h-[200px] font-mono"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Creating...
          </>
        ) : (
          <>
            <UploadCloud className="w-4 h-4 mr-2" />
            Create Roadmap
          </>
        )}
      </Button>
    </form>
  );
}
