import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { blogService } from '@/services/blogService';
import { CreatePostData, BlogPost as BlogPostType } from '@/types/blog';
import { Loader2, Send } from 'lucide-react';

interface CreatePostFormProps {
  onPostCreated: () => void;
  editingPost?: BlogPostType | null;
  onCancelEdit?: () => void;
}

const CreatePostForm = ({ onPostCreated, editingPost, onCancelEdit }: CreatePostFormProps) => {
  const [formData, setFormData] = useState<CreatePostData>({
    title: editingPost?.title || '',
    content: editingPost?.content || '',
    author: editingPost?.author || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<CreatePostData>>({});
  const { toast } = useToast();

  // Update form data when editingPost changes
  React.useEffect(() => {
    if (editingPost) {
      setFormData({
        title: editingPost.title,
        content: editingPost.content,
        author: editingPost.author,
      });
    } else {
      setFormData({
        title: '',
        content: '',
        author: '',
      });
    }
    setErrors({});
  }, [editingPost]);

  const validateForm = (): boolean => {
    const newErrors: Partial<CreatePostData> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (editingPost) {
        await blogService.updatePost(editingPost.title, formData);
        toast({
          title: "Success!",
          description: "Blog post updated successfully.",
        });
      } else {
        await blogService.createPost(formData);
        toast({
          title: "Success!",
          description: "Blog post created successfully.",
        });
      }
      
      // Reset form
      setFormData({
        title: '',
        content: '',
        author: '',
      });
      setErrors({});
      
      // Notify parent component
      onPostCreated();
      
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${editingPost ? 'update' : 'create'} blog post. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof CreatePostData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="text-cyber-green font-fira text-sm ml-4">{editingPost ? 'Edit Post' : 'Create New Post'}</span>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-cyber-green font-orbitron">
              Title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter post title..."
              className={`neon-border font-fira ${errors.title ? 'border-destructive' : ''}`}
            />
            {errors.title && (
              <p className="text-destructive text-sm font-fira">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="author" className="text-cyber-green font-orbitron">
              Author *
            </Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
              placeholder="Enter author name..."
              className={`neon-border font-fira ${errors.author ? 'border-destructive' : ''}`}
            />
            {errors.author && (
              <p className="text-destructive text-sm font-fira">{errors.author}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-cyber-green font-orbitron">
              Content *
            </Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              placeholder="Write your post content..."
              rows={8}
              className={`neon-border font-fira resize-none ${errors.content ? 'border-destructive' : ''}`}
            />
            {errors.content && (
              <p className="text-destructive text-sm font-fira">{errors.content}</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="neon-button flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {editingPost ? 'Updating...' : 'Publishing...'}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {editingPost ? 'Update Post' : 'Publish Post'}
                </>
              )}
            </Button>
            {editingPost && onCancelEdit && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancelEdit}
                className="neon-button-outline"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CreatePostForm;