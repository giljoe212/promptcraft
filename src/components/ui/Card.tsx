import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ className, children, onClick, hover = false }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-card p-4",
        hover && "transition-shadow duration-300 hover:shadow-card-hover",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-2", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn("font-semibold text-lg text-gray-900", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-gray-500", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn("p-2", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn("flex items-center p-2 pt-0", className)}>
      {children}
    </div>
  );
}