import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface ForgotPasswordFormProps {
  onSubmit: (data: { email: string }) => void;
}

type FormValues = {
  email: string;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    // For demo purposes, we'll just submit after a delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        onSubmit({ email: data.email });
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reset your password</h1>
        <p className="text-gray-600 mt-2">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="your.email@example.com"
            leftIcon={<Mail size={18} className="text-gray-400" />}
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          size="lg"
        >
          Send Reset Link
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Back to Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;