import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PromptRow = {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  created_at: string;
  created_by: string;
  is_favorite: boolean;
  is_template: boolean;
  parent_prompt_id?: string;
};

export async function createPrompt(prompt: Omit<PromptRow, 'id' | 'created_at' | 'created_by'>) {
  const { data, error } = await supabase
    .from('prompts')
    .insert([prompt])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updatePrompt(id: string, updates: Partial<PromptRow>) {
  const { data, error } = await supabase
    .from('prompts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getPrompts() {
  const { data, error } = await supabase
    .from('prompts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPromptById(id: string) {
  const { data, error } = await supabase
    .from('prompts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function togglePromptFavorite(id: string, isFavorite: boolean) {
  const { data, error } = await supabase
    .from('prompts')
    .update({ is_favorite: isFavorite })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deletePrompt(id: string) {
  const { error } = await supabase
    .from('prompts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}