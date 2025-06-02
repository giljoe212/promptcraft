import React from 'react';
import { Activity, BookOpen, Sparkles, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import PromptLibraryUpdates from '../components/dashboard/PromptLibraryUpdates';
import PromptStats from '../components/dashboard/PromptStats';

// Mock data
const libraryUpdates = [
  {
    id: '1',
    title: 'Cinematic Video Scene Templates',
    description: 'New templates for creating detailed cinematic scene descriptions',
    date: 'June 15, 2025',
    category: 'video',
    isNew: true,
  },
  {
    id: '2',
    title: 'Business Pitch Deck Prompts',
    description: 'Templates for creating compelling business presentations',
    date: 'June 10, 2025',
    category: 'business',
    isNew: false,
  },
  {
    id: '3',
    title: 'Storytelling Character Descriptions',
    description: 'Detailed prompts for creating rich character backgrounds',
    date: 'June 5, 2025',
    category: 'storytelling',
    isNew: false,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's what's happening with your prompts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Prompts Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                <Sparkles size={20} className="text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">89</div>
                <div className="text-xs text-green-600 flex items-center">
                  <Activity size={12} className="mr-1" />
                  +12% from last month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Library Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center mr-3">
                <BookOpen size={20} className="text-secondary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">246</div>
                <div className="text-xs text-green-600 flex items-center">
                  <Activity size={12} className="mr-1" />
                  +24 new templates
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Saved Prompts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                <BookOpen size={20} className="text-accent-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">32</div>
                <div className="text-xs text-green-600 flex items-center">
                  <Activity size={12} className="mr-1" />
                  +5 this week
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Prompt Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <Users size={20} className="text-gray-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5.2k</div>
                <div className="text-xs text-green-600 flex items-center">
                  <Activity size={12} className="mr-1" />
                  Growing daily
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PromptLibraryUpdates updates={libraryUpdates} />
        <PromptStats />
      </div>
    </div>
  );
};

export default Dashboard;