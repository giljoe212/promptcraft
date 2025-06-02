import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled, 
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500",
      outline: "border border-primary-200 bg-transparent hover:bg-primary-50 text-primary-700 focus-visible:ring-primary-500",
      ghost: "bg-transparent hover:bg-primary-50 text-primary-700 focus-visible:ring-primary-500",
      link: "bg-transparent underline-offset-4 hover:underline text-primary-700 focus-visible:ring-primary-500 p-0 h-auto"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg"
    };
    
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          variant !== 'link' && "shadow-sm",
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;