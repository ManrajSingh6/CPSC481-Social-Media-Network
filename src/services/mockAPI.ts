// Simulated API calls with delays
import { Post, User, Message } from '../types';
import { mockPosts, mockUsers, mockMessages } from './mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getPosts = async (): Promise<Post[]> => {
  await delay(800); // Simulate network delay
  return mockPosts;
};

export const getUser = async (id: string): Promise<User> => {
  await delay(500);
  const user = mockUsers.find(u => u.id === id);
  if (!user) throw new Error('User not found');
  return user;
};

export const getMessages = async (userId: string): Promise<Message[]> => {
  await delay(600);
  return mockMessages.filter(m => 
    m.senderId === userId || m.receiverId === userId
  );
};