import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost as BlogPostType } from '@/types/blog';
import { Edit, Trash2 } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onEdit?: (post: BlogPostType) => void;
  onDelete?: (title: string) => void;
}

const BlogPost = ({ post, onEdit, onDelete }: BlogPostProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="project-card group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-orbitron font-bold neon-text group-hover:animate-neon-pulse">
            {post.title}
          </h3>
          {post.createdAt && (
            <span className="text-sm text-muted-foreground font-fira">
              {formatDate(post.createdAt)}
            </span>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-muted-foreground font-fira whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="tech-badge">
            By {post.author}
          </span>
          
          {(onEdit || onDelete) && (
            <div className="flex gap-2">
              {onEdit && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(post)}
                  className="neon-button-outline"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(post.title)}
                  className="neon-button-outline hover:bg-cyber-red/20 hover:border-cyber-red"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;