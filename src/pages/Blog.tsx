import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { blogService } from '@/services/blogService';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogPost from '@/components/blog/BlogPost';
import CreatePostForm from '@/components/blog/CreatePostForm';
import { Loader2, Plus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostType | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; title: string }>({ open: false, title: '' });
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const fetchedPosts = await blogService.getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = () => {
    setShowCreateForm(false);
    setEditingPost(null);
    fetchPosts();
  };

  const handleEditPost = (post: BlogPostType) => {
    setEditingPost(post);
    setShowCreateForm(true);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setShowCreateForm(false);
  };

  const handleDeletePost = (title: string) => {
    setDeleteDialog({ open: true, title });
  };

  const confirmDelete = async () => {
    try {
      await blogService.deletePost(deleteDialog.title);
      toast({
        title: "Success",
        description: "Blog post deleted successfully.",
      });
      fetchPosts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleteDialog({ open: false, title: '' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-cyber-green animate-spin mx-auto mb-4" />
          <p className="text-cyber-green font-fira">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-x-hidden">
      {/* Matrix background */}
      <div className="fixed inset-0 matrix-bg opacity-30 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-cyber-green hover:text-cyber-blue transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-black neon-text">
                Blog Terminal
              </h1>
              <p className="text-cyber-blue font-fira mt-2">
                {"> Sharing thoughts and code snippets"}
              </p>
            </div>
          </div>
          
          <Button
            onClick={() => {
              if (showCreateForm && editingPost) {
                handleCancelEdit();
              } else {
                setShowCreateForm(!showCreateForm);
                setEditingPost(null);
              }
            }}
            className={`neon-button ${showCreateForm ? 'bg-cyber-green text-cyber-dark' : ''}`}
          >
            <Plus className="w-4 h-4 mr-2" />
            {showCreateForm ? 'Cancel' : 'New Post'}
          </Button>
        </div>

        {/* Create/Edit Post Form */}
        {showCreateForm && (
          <div className="mb-8 animate-fade-in-up">
            <CreatePostForm 
              onPostCreated={handlePostCreated}
              editingPost={editingPost}
              onCancelEdit={handleCancelEdit}
            />
          </div>
        )}

        {/* Blog Posts */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="terminal-window max-w-md mx-auto">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-cyber-green font-fira">
                    {"> No posts found"}
                  </p>
                  <p className="text-muted-foreground font-fira mt-2">
                    Be the first to write something!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            posts.map((post, index) => (
              <div key={post._id || index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogPost 
                  post={post} 
                  onEdit={handleEditPost}
                  onDelete={handleDeletePost}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => !open && setDeleteDialog({ open: false, title: '' })}>
        <AlertDialogContent className="terminal-window border border-cyber-red/50">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-cyber-red font-orbitron">Delete Post</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground font-fira">
              Are you sure you want to delete "{deleteDialog.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="neon-button-outline">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="neon-button bg-cyber-red/20 border-cyber-red text-cyber-red hover:bg-cyber-red/30"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Blog;