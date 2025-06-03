import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { Wand2 } from 'lucide-react';

interface PromptFormProps {
  onGenerate: (data: any) => void;
}

type PromptFormValues = {
  promptType: string;
  title: string;
  theme: string;
  tone: string;
  targetAudience: string;
  keyElements: string;
  aiModel: string;
  additionalInstructions: string;
  shotType: string;
  duration: string;
  cameraMovement: string;
  lighting: string;
  soundDesign: string;
  narrationStyle: string;
  characterType: string;
  visualStyle: string;
  outputFormat: string[];
};

const aiModels = [
  { value: 'veo3', label: 'VEO 3' },
  { value: 'veo2', label: 'VEO 2' },
  { value: 'midjourney', label: 'Midjourney' },
  { value: 'dalle3', label: 'DALL-E 3' },
  { value: 'gpt4', label: 'GPT-4' },
];

const promptTypes = [
  { value: 'cinematic', label: 'Cinematic Scene' },
  { value: 'commercial', label: 'Commercial/Advertisement' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'narrative', label: 'Narrative Story' },
  { value: 'music_video', label: 'Music Video' },
  { value: 'travel', label: 'Travel Content' },
  { value: 'product', label: 'Product Showcase' },
  { value: 'nature', label: 'Nature Documentary' },
];

const themes = [
  { value: 'nature', label: 'Nature & Landscapes' },
  { value: 'urban', label: 'Urban & City' },
  { value: 'adventure', label: 'Adventure & Action' },
  { value: 'lifestyle', label: 'Lifestyle & Culture' },
  { value: 'abstract', label: 'Abstract & Artistic' },
  { value: 'technology', label: 'Technology & Innovation' },
  { value: 'fantasy', label: 'Fantasy & Surreal' },
  { value: 'minimalist', label: 'Minimalist & Clean' },
  { value: 'vintage', label: 'Vintage & Retro' },
  { value: 'futuristic', label: 'Futuristic & Sci-fi' },
];

const tones = [
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'dramatic', label: 'Dramatic' },
  { value: 'emotional', label: 'Emotional' },
  { value: 'inspirational', label: 'Inspirational' },
  { value: 'mysterious', label: 'Mysterious' },
  { value: 'peaceful', label: 'Peaceful' },
  { value: 'energetic', label: 'Energetic' },
  { value: 'nostalgic', label: 'Nostalgic' },
  { value: 'whimsical', label: 'Whimsical' },
];

const shotTypes = [
  { value: 'aerial', label: 'Aerial/Drone' },
  { value: 'wide', label: 'Wide Shot' },
  { value: 'medium', label: 'Medium Shot' },
  { value: 'close_up', label: 'Close-up' },
  { value: 'extreme_close_up', label: 'Extreme Close-up' },
  { value: 'pov', label: 'POV Shot' },
  { value: 'establishing', label: 'Establishing Shot' },
];

const cameraMovements = [
  { value: 'dolly', label: 'Dolly' },
  { value: 'pan', label: 'Pan' },
  { value: 'tilt', label: 'Tilt' },
  { value: 'tracking', label: 'Tracking' },
  { value: 'crane', label: 'Crane' },
  { value: 'handheld', label: 'Handheld' },
  { value: 'steadicam', label: 'Steadicam' },
  { value: 'static', label: 'Static' },
];

const durations = [
  { value: '15s', label: '15 seconds' },
  { value: '30s', label: '30 seconds' },
  { value: '60s', label: '1 minute' },
  { value: '90s', label: '1.5 minutes' },
  { value: '120s', label: '2 minutes' },
  { value: '180s', label: '3 minutes' },
  { value: 'custom', label: 'Custom Duration' },
];

const lightingStyles = [
  { value: 'natural', label: 'Natural Light' },
  { value: 'golden_hour', label: 'Golden Hour' },
  { value: 'blue_hour', label: 'Blue Hour' },
  { value: 'dramatic', label: 'Dramatic' },
  { value: 'high_key', label: 'High Key' },
  { value: 'low_key', label: 'Low Key' },
  { value: 'backlit', label: 'Backlit' },
];

const soundDesigns = [
  { value: 'ambient', label: 'Ambient' },
  { value: 'orchestral', label: 'Orchestral' },
  { value: 'electronic', label: 'Electronic' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'nature', label: 'Nature Sounds' },
  { value: 'urban', label: 'Urban/City' },
  { value: 'silence', label: 'Silence/No Music' },
];

const narrationStyles = [
  { value: 'voice_over', label: 'Voice-over Narration' },
  { value: 'dialogue', label: 'Character Dialogue' },
  { value: 'monologue', label: 'Internal Monologue' },
  { value: 'none', label: 'No Narration' },
];

const outputFormats = [
  { value: 'scene_description', label: 'Scene Description' },
  { value: 'shot_list', label: 'Shot List' },
  { value: 'narration_script', label: 'Narration Script' },
  { value: 'visual_prompt', label: 'Visual Prompt' },
  { value: 'storyboard', label: 'Storyboard Description' },
];

const PromptForm: React.FC<PromptFormProps> = ({ onGenerate }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { 
    register, 
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<PromptFormValues>({
    defaultValues: {
      promptType: 'cinematic',
      aiModel: 'veo3',
      tone: 'cinematic',
      outputFormat: ['scene_description', 'narration_script'],
    }
  });

  const promptType = watch('promptType');

  const onSubmit = (data: PromptFormValues) => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      onGenerate(data);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Prompt Type"
            options={promptTypes}
            error={errors.promptType?.message}
            {...register('promptType', { required: 'Prompt type is required' })}
          />
        </div>
        <div>
          <Select
            label="AI Model"
            options={aiModels}
            error={errors.aiModel?.message}
            {...register('aiModel', { required: 'AI model is required' })}
          />
        </div>
      </div>

      <div>
        <Input
          label="Prompt Title"
          placeholder="Mountain Sunrise Scene"
          error={errors.title?.message}
          {...register('title', { required: 'Title is required' })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Theme"
            options={themes}
            error={errors.theme?.message}
            {...register('theme', { required: 'Theme is required' })}
          />
        </div>
        <div>
          <Select
            label="Tone"
            options={tones}
            error={errors.tone?.message}
            {...register('tone', { required: 'Tone is required' })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Shot Type"
            options={shotTypes}
            error={errors.shotType?.message}
            {...register('shotType')}
          />
        </div>
        <div>
          <Select
            label="Camera Movement"
            options={cameraMovements}
            error={errors.cameraMovement?.message}
            {...register('cameraMovement')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Lighting"
            options={lightingStyles}
            error={errors.lighting?.message}
            {...register('lighting')}
          />
        </div>
        <div>
          <Select
            label="Duration"
            options={durations}
            error={errors.duration?.message}
            {...register('duration')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Sound Design"
            options={soundDesigns}
            error={errors.soundDesign?.message}
            {...register('soundDesign')}
          />
        </div>
        <div>
          <Select
            label="Narration Style"
            options={narrationStyles}
            error={errors.narrationStyle?.message}
            {...register('narrationStyle')}
          />
        </div>
      </div>

      <div>
        <TextArea
          label="Key Elements to Include"
          placeholder="Mountains, morning mist, wildflowers, golden light"
          error={errors.keyElements?.message}
          {...register('keyElements', { required: 'Key elements are required' })}
        />
      </div>

      <div>
        <TextArea
          label="Additional Instructions"
          placeholder="Any specific details about mood, atmosphere, or technical requirements"
          error={errors.additionalInstructions?.message}
          {...register('additionalInstructions')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Output Format
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {outputFormats.map((format) => (
            <label
              key={format.value}
              className="flex items-center space-x-2 text-sm"
            >
              <input
                type="checkbox"
                value={format.value}
                {...register('outputFormat')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span>{format.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full"
        leftIcon={<Wand2 size={20} />}
        isLoading={isGenerating}
        size="lg"
      >
        {isGenerating ? 'Generating Prompt...' : 'Generate Detailed Prompt'}
      </Button>
    </form>
  );
};

export default PromptForm;