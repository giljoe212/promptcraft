import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => void;
}

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data: FormValues) => {
    try {
      setLoginError(null);
      // Demo credentials: demo@example.com / Demo123!
      if (data.email === 'demo@example.com' && data.password === 'Demo123!') {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        onLogin(data);
        navigate('/dashboard');
      } else {
        setLoginError('Invalid email or password. Try demo@example.com / Demo123!');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600 mt-2">Sign in to access your account</p>
      </div>

      {loginError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          {loginError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="demo@example.com"
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
            placeholder="Demo123!"
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
              required: 'Password is required'
            })}
          />
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            id="rememberMe"
            {...register('rememberMe')}
          />
          <Link 
            to="/forgot-password" 
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          size="lg"
        >
          Sign In
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link 
              to="/register" 
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;