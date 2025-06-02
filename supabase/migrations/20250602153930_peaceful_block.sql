/*
  # Create prompts table and related schemas

  1. New Tables
    - `prompts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `content` (text, not null)
      - `category` (text, not null)
      - `tags` (text array)
      - `created_at` (timestamp with time zone)
      - `created_by` (uuid, references auth.users)
      - `is_favorite` (boolean)
      - `is_template` (boolean)
      - `parent_prompt_id` (uuid, self-reference for edited prompts)

  2. Security
    - Enable RLS on prompts table
    - Add policies for CRUD operations
*/

-- Create enum for prompt categories
CREATE TYPE prompt_category AS ENUM (
  'business',
  'storytelling',
  'advertising',
  'video',
  'image',
  'social',
  'other'
);

-- Create prompts table
CREATE TABLE IF NOT EXISTS prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category prompt_category NOT NULL,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users NOT NULL,
  is_favorite boolean DEFAULT false,
  is_template boolean DEFAULT false,
  parent_prompt_id uuid REFERENCES prompts(id),
  CONSTRAINT title_length CHECK (char_length(title) >= 3)
);

-- Enable Row Level Security
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read all prompts"
  ON prompts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create their own prompts"
  ON prompts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own prompts"
  ON prompts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can delete their own prompts"
  ON prompts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = created_by);

-- Create indexes
CREATE INDEX prompts_created_by_idx ON prompts(created_by);
CREATE INDEX prompts_category_idx ON prompts(category);
CREATE INDEX prompts_created_at_idx ON prompts(created_at DESC);