import React, { useState } from 'react';
import PromptCard from '../components/library/PromptCard';
import PromptFilters from '../components/library/PromptFilters';
import { Prompt, PromptCategory } from '../types';

// Mock data
const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Cinematic Underwater Scene',
    content: 'Open with a sweeping drone shot over a shallow reef shelf bursting with pink and gold coral, sunlight dancing across rippling currents and soft coral fans. A soft, cinematic music bed begins. The female narrator quietly says, "Where light first touches the world below."',
    category: 'video',
    tags: ['cinematic', 'underwater', 'narrative'],
    createdAt: 'June 15, 2025',
    createdBy: 'user123',
    isFavorite: true,
  },
  {
    id: '2',
    title: 'Business Value Proposition',
    content: 'Create a professional value proposition statement that highlights how [Product] solves [Problem] for [Target Audience] by providing [Key Benefit] unlike [Competitor Alternative].',
    category: 'business',
    tags: ['marketing', 'value-prop', 'business'],
    createdAt: 'June 10, 2025',
    createdBy: 'user123',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Character Introduction',
    content: 'Describe a character\'s first appearance in a story, focusing on their distinctive physical traits, mannerisms, and the impression they leave on others. Include subtle hints about their background and personality.',
    category: 'storytelling',
    tags: ['character', 'fiction', 'description'],
    createdAt: 'June 5, 2025',
    createdBy: 'user123',
    isFavorite: true,
  },
  {
    id: '4',
    title: 'Product Advertisement',
    content: 'Create an engaging and persuasive advertisement for [Product] that highlights its key features, benefits, and unique selling points. Include a clear call-to-action and emotional appeal.',
    category: 'advertising',
    tags: ['product', 'marketing', 'ad'],
    createdAt: 'June 1, 2025',
    createdBy: 'user123',
    isFavorite: false,
  },
  {
    id: '5',
    title: 'Urban Landscape',
    content: 'A hyper-detailed ultra-realistic image of a futuristic cityscape with towering skyscrapers, flying vehicles, and holographic advertisements. The scene is set at dusk with a purple and orange sky, creating dramatic lighting effects.',
    category: 'image',
    tags: ['cityscape', 'futuristic', 'architecture'],
    createdAt: 'May 28, 2025',
    createdBy: 'user123',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Social Media Campaign',
    content: 'Create a series of engaging social media posts to promote [Event/Product] to [Target Audience]. Include attention-grabbing headlines, persuasive descriptions, and effective calls-to-action.',
    category: 'social',
    tags: ['marketing', 'social-media', 'campaign'],
    createdAt: 'May 25, 2025',
    createdBy: 'user123',
    isFavorite: true,
  }
];

const categories = [
  { value: 'business', label: 'Business' },
  { value: 'storytelling', label: 'Storytelling' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'video', label: 'Video' },
  { value: 'image', label: 'Image' },
  { value: 'social', label: 'Social' },
];

const PromptLibrary: React.FC = () => {
  const [prompts, setPrompts] = useState<Prompt[]>(mockPrompts);
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter prompts based on category and search term
  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleToggleFavorite = (id: string) => {
    setPrompts(prompts.map(prompt => 
      prompt.id === id 
        ? { ...prompt, isFavorite: !prompt.isFavorite } 
        : prompt
    ));
  };

  const handleUsePrompt = (prompt: Prompt) => {
    // Navigate to generator with this prompt
    console.log('Using prompt:', prompt);
    // In a real app, we would navigate or open a modal
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Prompt Library</h1>
        <p className="mt-2 text-gray-600">
          Browse and use our collection of ready-to-use prompt templates.
        </p>
      </div>
      
      <PromptFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No prompts found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onToggleFavorite={handleToggleFavorite}
              onUse={handleUsePrompt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptLibrary;