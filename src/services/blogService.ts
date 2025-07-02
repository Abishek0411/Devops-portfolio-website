import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { BlogPost, CreatePostData } from '@/types/blog';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogService = {
  // Get all blog posts
  async getPosts(): Promise<BlogPost[]> {
    const response = await api.get('/posts');
    return response.data;
  },

  // Create a new blog post
  async createPost(postData: CreatePostData): Promise<BlogPost> {
    const response = await api.post('/posts', postData);
    return response.data;
  },

  // Update a blog post
  async updatePost(title: string, postData: CreatePostData): Promise<BlogPost> {
    const response = await api.put(`/posts/${encodeURIComponent(title)}`, postData);
    return response.data;
  },

  // Delete a blog post
  async deletePost(title: string): Promise<void> {
    await api.delete(`/posts/${encodeURIComponent(title)}`);
  },
};