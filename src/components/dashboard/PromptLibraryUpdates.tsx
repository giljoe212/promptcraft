import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { LibraryUpdate } from '../../types';

interface PromptLibraryUpdatesProps {
  updates: LibraryUpdate[];
}

const PromptLibraryUpdates: React.FC<PromptLibraryUpdatesProps> = ({ updates }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Latest Prompt Library Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => (
            <div 
              key={update.id} 
              className="flex items-start p-3 rounded-lg transition-colors hover:bg-gray-50"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <p className="font-medium text-gray-900 truncate">{update.title}</p>
                  {update.isNew && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary-100 text-primary-800">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{update.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {update.date} • {update.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptLibraryUpdates;