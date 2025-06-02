import React from 'react';
import { cn } from '../../utils/cn';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
              error && "border-red-300",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={props.id} className="font-medium text-gray-700">
              {label}
            </label>
          )}
          
          {error && (
            <p className="text-red-500">{error}</p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;