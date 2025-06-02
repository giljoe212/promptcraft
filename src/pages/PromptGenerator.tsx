import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import PromptForm from '../components/generator/PromptForm';
import PromptResult from '../components/generator/PromptResult';

// Example generated prompt
const exampleGeneratedPrompt = `Open with a sweeping drone shot over a shallow reef shelf bursting with pink and gold coral, sunlight dancing across rippling currents and soft coral fans. A soft, cinematic music bed begins. The female narrator quietly says, "Where light first touches the world below."

Cut to a wide, slow dolly shot gliding past a winding coral canyon filled with darting reef fish, capturing layers of coral branches and neon fish flickering in the shafts of light from a low angle. The narration follows: "A living maze of color and motion."

Transition to a steady, elevated pan across anemone fields swaying gently near the ocean floor, where golden beams scatter through water, illuminating dancing plankton. The narration continues: "Every corner breathes with life."

End with a slow tilt upward revealing the open blue fading to the deep with silhouetted sea turtles, the light dimming gently, wrapping the ocean in quiet. The narration ends with: "And the sea remembers everything."

All visuals are rendered in ultra-HD, natural underwater lighting, cinematic lens flares, and ambient travel film music. No captions or text.`;

const PromptGenerator: React.FC = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [promptTitle, setPromptTitle] = useState('');

  const handleGeneratePrompt = (data: any) => {
    console.log('Form data:', data);
    // In a real app, this would call an API to generate the prompt
    setPromptTitle(data.title);
    setGeneratedPrompt(exampleGeneratedPrompt);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    // In a real app, we would show a toast notification
    alert('Prompt copied to clipboard!');
  };

  const handleDownloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedPrompt], {type: 'text/plain'});
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
                <h3 className="text-sm font-medium text-gray-900 mb-1">Be Specific</h3>
                <p className="text-sm text-gray-600">
                  Include specific details about setting, lighting, camera angles, and subject matter.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Use Sensory Language</h3>
                <p className="text-sm text-gray-600">
                  Describe how things look, sound, feel, and move to create vivid scenes.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Structure Your Prompts</h3>
                <p className="text-sm text-gray-600">
                  For videos or stories, create a clear beginning, middle, and end.
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Example Format</h3>
                <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-800">
                  <p><strong>Open with:</strong> [Initial scene description]</p>
                  <p><strong>Cut to:</strong> [Next scene description]</p>
                  <p><strong>Transition to:</strong> [Following scene]</p>
                  <p><strong>End with:</strong> [Final scene]</p>
                  <p><strong>Technical details:</strong> [Specifications]</p>
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