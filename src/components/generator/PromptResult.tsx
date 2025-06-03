import React from 'react';
import { Copy, Download, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';

interface PromptResultProps {
  title: string;
  content: {
    sceneDescription?: string;
    narrationScript?: string;
    shotList?: string;
    visualPrompt?: string;
    storyboard?: string;
  };
  onCopy: () => void;
  onDownload: () => void;
  onShare: () => void;
}

const PromptResult: React.FC<PromptResultProps> = ({
  title,
  content,
  onCopy,
  onDownload,
  onShare,
}) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {content.sceneDescription && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Scene Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed">
                  {content.sceneDescription}
                </p>
              </div>
            </div>
          )}

          {content.narrationScript && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Narration Script</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed">
                  {content.narrationScript}
                </p>
              </div>
            </div>
          )}

          {content.shotList && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Shot List</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed">
                  {content.shotList}
                </p>
              </div>
            </div>
          )}

          {content.visualPrompt && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Visual Prompt</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed">
                  {content.visualPrompt}
                </p>
              </div>
            </div>
          )}

          {content.storyboard && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Storyboard Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed">
                  {content.storyboard}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-3">
        <Button 
          variant="outline" 
          size="sm" 
          leftIcon={<Copy size={16} />}
          onClick={onCopy}
        >
          Copy
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Download size={16} />}
          onClick={onDownload}
        >
          Download
        </Button>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<Share2 size={16} />}
          onClick={onShare}
        >
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromptResult;