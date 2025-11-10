import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'white';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'cyan',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    cyan: 'border-cyan-500 border-t-cyan-300',
    purple: 'border-purple-500 border-t-purple-300',
    white: 'border-white border-t-gray-300'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div 
        className={`
          animate-spin rounded-full border-2 border-solid border-r-transparent
          ${sizeClasses[size]} 
          ${colorClasses[color]}
        `}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};