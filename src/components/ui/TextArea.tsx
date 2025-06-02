import React from 'react';
import { cn } from '../../utils/cn';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm",
            "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
            error && "border-red-300 focus:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;