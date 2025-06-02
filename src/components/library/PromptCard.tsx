import React from 'react';
import { Bookmark, Star, StarOff, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/Card';
import { Prompt } from '../../types';
import Button from '../ui/Button';

interface PromptCardProps {
  prompt: Prompt;
  onToggleFavorite: (id: string) => void;
  onUse: (prompt: Prompt) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  onToggleFavorite,
  onUse,
}) => {
  const truncateContent = (content: string, maxLength = 120) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
  };

  return (
    <Card className="h-full hover:shadow-card-hover transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{prompt.title}</CardTitle>
          <button
            onClick={() => onToggleFavorite(prompt.id)}
            className={`p-1 rounded-full ${
              prompt.isFavorite ? 'text-yellow-500' : 'text-gray-400'
            } hover:bg-gray-100`}
          >
            {prompt.isFavorite ? <Star size={18} /> : <StarOff size={18} />}
          </button>
        </div>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Bookmark size={14} className="mr-1" />
          <span className="capitalize">{prompt.category}</span>
        </div>
      </CardHeader>
      
      <CardContent className="py-2">
        <p className="text-gray-600 text-sm">
          {truncateContent(prompt.content)}
        </p>
        <div className="flex flex-wrap mt-3 gap-2">
          {prompt.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">{prompt.createdAt}</span>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => onUse(prompt)}
        >
          Use Prompt
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromptCard;