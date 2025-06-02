import React from 'react';
import { PromptCategory } from '../../types';
import { Search } from 'lucide-react';

interface PromptFiltersProps {
  categories: { value: PromptCategory; label: string }[];
  selectedCategory: PromptCategory | 'all';
  onCategoryChange: (category: PromptCategory | 'all') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const PromptFilters: React.FC<PromptFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search prompts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-1 sm:pb-0">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
              selectedCategory === category.value
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptFilters;