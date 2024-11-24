// Contains sample data for courses, posts, profiles
import { Post, User, Message } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john.jpg',
  },
  // Add more mock users
];

export const mockPosts: Post[] = [
  {
    id: '1',
    content: 'This is a sample post',
    authorId: '1',
    createdAt: new Date().toISOString(),
    author: mockUsers[0],
  },
  // Add more mock posts
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: '2',
    content: 'Hello!',
    timestamp: new Date().toISOString(),
  },
  // Add more mock messages
];