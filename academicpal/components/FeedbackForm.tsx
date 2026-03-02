'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'suggestion',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement API call to submit feedback
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Thank you for your feedback!');
      setIsSubmitted(true);
    } catch (error) {
      toast.error('Failed to submit feedback');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-gray-400 mb-4">Your feedback has been submitted successfully.</p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              feedbackType: 'suggestion',
              message: '',
            });
          }}
          variant="outline"
          className="border-white/20"
        >
          Submit More Feedback
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="bg-black/50 border-white/20 text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="bg-black/50 border-white/20 text-white"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="feedbackType" className="text-white">
          Feedback Type
        </Label>
        <select
          id="feedbackType"
          value={formData.feedbackType}
          onChange={(e) => setFormData({ ...formData, feedbackType: e.target.value })}
          className="w-full h-10 px-3 bg-black/50 border border-white/20 text-white rounded-md"
        >
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="content">Content Improvement</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Your Feedback
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us what you think..."
          className="bg-black/50 border-white/20 text-white min-h-[120px]"
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
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit Feedback
          </>
        )}
      </Button>
    </form>
  );
}
