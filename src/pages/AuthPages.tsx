import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
      
      {/* Right side - Branded background */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-900 p-12 flex flex-col">
        <div className="flex items-center text-white mb-12">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Wand2 size={28} className="text-white" />
          </div>
          <h1 className="ml-4 text-2xl font-bold">PromptPixel</h1>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Create powerful AI prompts with ease
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Generate detailed, professional prompts for images, videos, stories, and more with our intuitive tools.
          </p>
          
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">{i}</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">
                    {i === 1 && "Access our extensive prompt library"}
                    {i === 2 && "Customize prompts with our advanced generator"}
                    {i === 3 && "Save and share your favorite prompts"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <p className="text-white/60 text-sm">
            © 2025 PromptPixel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    onLoginSuccess();
    navigate('/dashboard');
  };
  
  return (
    <AuthLayout title="Sign In">
      <LoginForm onLogin={handleLogin} />
    </AuthLayout>
  );
};

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleRegister = () => {
    navigate('/login');
  };
  
  return (
    <AuthLayout title="Create an account">
      <RegisterForm onRegister={handleRegister} />
    </AuthLayout>
  );
};

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleForgotPassword = () => {
    navigate('/login');
  };
  
  return (
    <AuthLayout title="Reset Password">
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </AuthLayout>
  );
};