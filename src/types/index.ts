// User types
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

// Authentication types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

// Prompt types
export interface Prompt {
  id: string;
  title: string;
  content: string;
  category: PromptCategory;
  tags: string[];
  createdAt: string;
  createdBy: string;
  isFavorite: boolean;
}

export type PromptCategory = 
  | 'business'
  | 'storytelling'
  | 'advertising'
  | 'video'
  | 'image'
  | 'social'
  | 'other';

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  template: string;
  category: PromptCategory;
  fields: PromptField[];
}

export interface PromptField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'select' | 'textarea' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: string[];
  required: boolean;
}

// Dashboard types
export interface LibraryUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  category: PromptCategory;
  isNew: boolean;
}