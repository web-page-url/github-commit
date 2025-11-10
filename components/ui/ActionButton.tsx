import React, { useState } from 'react';

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-lg',
    lg: 'px-12 py-4 text-xl'
  };

  const variantClasses = {
    primary: {
      base: 'bg-gradient-to-r from-gray-900 via-gray-800 to-black border-cyan-400/50 text-cyan-300',
      hover: 'border-cyan-400 shadow-lg shadow-cyan-500/25',
      glow: 'from-cyan-500 to-blue-500'
    },
    secondary: {
      base: 'bg-gradient-to-r from-gray-900 via-gray-800 to-black border-purple-400/50 text-purple-300',
      hover: 'border-purple-400 shadow-lg shadow-purple-500/25',
      glow: 'from-purple-500 to-pink-500'
    },
    danger: {
      base: 'bg-gradient-to-r from-gray-900 via-red-900/30 to-black border-red-400/50 text-red-300',
      hover: 'border-red-400 shadow-lg shadow-red-500/25',
      glow: 'from-red-500 to-orange-500'
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        relative inline-flex items-center justify-center font-bold uppercase tracking-wider
        overflow-hidden border-2 rounded-lg backdrop-blur-sm transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-gray-900 ${sizeClasses[size]} ${currentVariant.base}
        ${isHovered ? currentVariant.hover : ''}
        ${isPressed ? 'scale-95' : ''}
        ${className}
      `}
      style={{
        boxShadow: isHovered
          ? `0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)`
          : '0 0 10px rgba(0, 212, 255, 0.1)',
        textShadow: isHovered ? '0 0 8px currentColor' : 'none'
      }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg">
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${currentVariant.glow} opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-20 animate-cyber-scan' : ''}`}></div>
      </div>

      {/* Corner Accents */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-current opacity-60 transition-all duration-300"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-current opacity-60 transition-all duration-300"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-current opacity-60 transition-all duration-300"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-current opacity-60 transition-all duration-300"></div>

      {/* Hover Corner Effects */}
      {isHovered && (
        <>
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
        </>
      )}

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2 z-10">
        {children}
        {/* Loading Dots Animation */}
        {disabled && (
          <div className="flex gap-1 ml-2">
            <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </span>

      {/* Outer Glow Effect */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${currentVariant.glow} opacity-0 blur-xl transition-opacity duration-500 -z-10`}
        style={{
          opacity: isHovered ? 0.3 : 0,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      ></div>

      {/* Ripple Effect */}
      {isPressed && (
        <div className="absolute inset-0 rounded-lg bg-white/20 animate-ping"></div>
      )}
    </button>
  );
};
