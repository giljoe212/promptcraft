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
};

const aiModels = [
  { value: 'veo3', label: 'VEO 3' },
  { value: 'veo2', label: 'VEO 2' },
  { value: 'midjourney', label: 'Midjourney' },
  { value: 'dalle3', label: 'DALL-E 3' },
  { value: 'gpt4', label: 'GPT-4' },
];

const promptTypes = [
  { value: 'image', label: 'Image Prompt' },
  { value: 'video', label: 'Video Scene' },
  { value: 'story', label: 'Story/Narrative' },
  { value: 'dialogue', label: 'Dialogue' },
  { value: 'social', label: 'Social Media Post' },
];

const tones = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'dramatic', label: 'Dramatic' },
  { value: 'inspirational', label: 'Inspirational' },
  { value: 'cinematic', label: 'Cinematic' },
];

const themes = [
  { value: 'nature', label: 'Nature' },
  { value: 'technology', label: 'Technology' },
  { value: 'business', label: 'Business' },
  { value: 'travel', label: 'Travel' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'underwater', label: 'Underwater' },
  { value: 'space', label: 'Space' },
  { value: 'urban', label: 'Urban' },
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
      promptType: 'video',
      aiModel: 'veo3',
      tone: 'cinematic',
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
          placeholder="Underwater Coral Reef Scene"
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

      <div>
        <Input
          label="Target Audience"
          placeholder="Nature documentary viewers, travel enthusiasts"
          error={errors.targetAudience?.message}
          {...register('targetAudience')}
        />
      </div>

      <div>
        <TextArea
          label="Key Elements to Include"
          placeholder="Coral reefs, sea turtles, schools of fish, sunlight through water"
          error={errors.keyElements?.message}
          {...register('keyElements', { required: 'Key elements are required' })}
        />
      </div>

      {promptType === 'video' && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Video-Specific Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Shot Type"
              placeholder="Drone shot, dolly, pan"
              {...register('shotType')}
            />
            <Input
              label="Duration"
              placeholder="30 seconds"
              {...register('duration')}
            />
          </div>
        </div>
      )}

      {promptType === 'story' && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Narrative Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Protagonist"
              placeholder="Marine biologist, sea turtle"
              {...register('protagonist')}
            />
            <Input
              label="Setting"
              placeholder="Great Barrier Reef, deep ocean"
              {...register('setting')}
            />
          </div>
        </div>
      )}

      <div>
        <TextArea
          label="Additional Instructions"
          placeholder="Any specific styles, camera angles, lighting, or other details you want included"
          error={errors.additionalInstructions?.message}
          {...register('additionalInstructions')}
        />
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