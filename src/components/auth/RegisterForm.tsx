import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

interface RegisterFormProps {
  onRegister: (data: { name: string; email: string; password: string }) => void;
}

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors, isSubmitting } 
  } = useForm<FormValues>();

  const password = watch('password');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: FormValues) => {
    // For demo purposes, we'll just register the user after a delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        onRegister({ 
          name: data.name, 
          email: data.email, 
          password: data.password 
        });
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
        <p className="text-gray-600 mt-2">Join PromptCraft to create amazing AI prompts</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input
            label="Full Name"
            type="text"
            id="name"
            placeholder="John Doe"
            leftIcon={<User size={18} className="text-gray-400" />}
            error={errors.name?.message}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
          />
        </div>

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

        <div>
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            leftIcon={<Lock size={18} className="text-gray-400" />}
            rightIcon={
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="text-gray-400 hover:text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: 'Password must include uppercase, lowercase, number and special character',
              }
            })}
          />
          <p className="text-sm text-red-500 mt-1">
            Password must include uppercase, lowercase, number and special character
          </p>
        </div>

        <div>
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="••••••••"
            leftIcon={<Lock size={18} className="text-gray-400" />}
            rightIcon={
              <button 
                type="button" 
                onClick={toggleConfirmPasswordVisibility} 
                className="text-gray-400 hover:text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
            error={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === password || 'Passwords do not match',
            })}
          />
        </div>

        <div>
          <Checkbox
            label={
              <span>
                I agree to the{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </Link>
              </span>
            }
            id="agreeTerms"
            error={errors.agreeTerms?.message}
            {...register('agreeTerms', {
              required: 'You must agree to the terms to continue',
            })}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          size="lg"
        >
          Create Account
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;