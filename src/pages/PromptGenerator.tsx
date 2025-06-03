import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import PromptForm from '../components/generator/PromptForm';
import PromptResult from '../components/generator/PromptResult';

const PromptGenerator: React.FC = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<any>(null);
  const [promptTitle, setPromptTitle] = useState('');

  const handleGeneratePrompt = (data: any) => {
    console.log('Form data:', data);
    setPromptTitle(data.title);
    
    // Example generated content with multiple sections
    const content = {
      sceneDescription: `Open with a sweeping drone shot over sunrise hills with drifting fog and wildflowers, golden light illuminating every curve of the terrain as mist drifts gently. A soft, cinematic music bed begins.

Cut to a wide, slow dolly shot gliding past an alpine forest ridge basking in morning sun, capturing texture, depth, and movement from low angle.

Transition to a steady, elevated pan across a turquoise coastline with jagged cliffs and sea foam, where natural patterns and light reflections play on the surface.

End with a slow tilt upward revealing distant snow peaks glowing in golden hour, glowing beneath a soft amber sky.`,

      narrationScript: `"The day begins in silence."

"Light moves through the pines."

"Waves shape the edge of the world."

"Stillness above all."`,

      shotList: `1. Drone Shot - Aerial view of hills at sunrise
2. Dolly Shot - Low angle tracking through forest
3. Pan Shot - Elevated view of coastline
4. Tilt Shot - Upward movement to reveal mountains`,

      visualPrompt: `Ultra-HD visuals with natural lighting and cinematic lens flares. Golden hour color grading emphasizing warm tones. Ambient atmospheric elements like mist and sea spray. No text overlays or captions.`,

      storyboard: `Frame 1: Wide aerial shot, morning fog swirling around rolling hills
Frame 2: Low tracking shot through sunlit forest, beams of light visible
Frame 3: Side pan of dramatic coastline, waves crashing below
Frame 4: Ending on majestic mountain peaks in golden light`
    };

    setGeneratedPrompt(content);
  };

  const handleCopyPrompt = () => {
    const fullPrompt = Object.values(generatedPrompt).join('\n\n');
    navigator.clipboard.writeText(fullPrompt);
    // In a real app, we would show a toast notification
    alert('Prompt copied to clipboard!');
  };

  const handleDownloadPrompt = () => {
    const fullPrompt = Object.entries(generatedPrompt)
      .map(([key, value]) => `# ${key.replace(/([A-Z])/g, ' $1').trim()}\n\n${value}`)
      .join('\n\n');
    
    const element = document.createElement('a');
    const file = new Blob([fullPrompt], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${promptTitle.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSharePrompt = () => {
    // In a real app, this would open a share dialog or modal
    alert('Share functionality would appear here');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Prompt Generator</h1>
        <p className="mt-2 text-gray-600">
          Create detailed, professional AI prompts for various use cases
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prompt Builder Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Build Your Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <PromptForm onGenerate={handleGeneratePrompt} />
          </CardContent>
        </Card>

        {/* Tips and Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Tips & Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Scene Structure</h3>
                <p className="text-sm text-gray-600">
                  Break your scene into clear segments: opening, main action, transitions, and closing.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Visual Details</h3>
                <p className="text-sm text-gray-600">
                  Include specific camera movements, lighting conditions, and atmospheric elements.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Sound Design</h3>
                <p className="text-sm text-gray-600">
                  Consider music, ambient sounds, and how they complement the visuals.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Narration</h3>
                <p className="text-sm text-gray-600">
                  Keep voice-over concise and poetic, enhancing rather than describing the visuals.
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Example Structure</h3>
                <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-800">
                  <p><strong>Opening:</strong> Set the scene and mood</p>
                  <p><strong>Development:</strong> Build the narrative</p>
                  <p><strong>Climax:</strong> Peak moment or revelation</p>
                  <p><strong>Resolution:</strong> Satisfying conclusion</p>
                  <p><strong>Technical:</strong> Specific requirements</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {generatedPrompt && (
        <PromptResult
          title={promptTitle || "Generated Prompt"}
          content={generatedPrompt}
          onCopy={handleCopyPrompt}
          onDownload={handleDownloadPrompt}
          onShare={handleSharePrompt}
        />
      )}
    </div>
  );
};

export default PromptGenerator;