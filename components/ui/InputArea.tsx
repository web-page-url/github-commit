import React, { useState } from 'react';
import { SparklesIcon } from '../icons';

interface InputAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  exampleInput: string;
}

export const InputArea: React.FC<InputAreaProps> = ({ value, onChange, placeholder, exampleInput }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      {/* Label with Cyberpunk Styling */}
      <div className="flex items-center mb-4 mt-6">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
          <label htmlFor="diff-input" className="text-lg font-semibold text-cyan-300 font-mono tracking-wide">
            CODE CHANGES INPUT
          </label>
        </div>
        <div className="flex-1 ml-4 h-px bg-gradient-to-r from-cyan-400/50 via-transparent to-transparent"></div>
      </div>

      {/* Input Container with Cyberpunk Border */}
      <div className="relative group">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-purple-900/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

        {/* Border Container */}
        <div className="relative border-2 border-cyan-400/30 rounded-xl overflow-hidden backdrop-blur-sm">
          {/* Animated Border Scan Line */}
          <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ${isFocused ? 'animate-cyber-scan' : ''}`}></div>

          {/* Corner Accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60"></div>

          {/* Active Corner Accents */}
          {isFocused && (
            <>
              <div className="absolute -top-2 -left-2 w-5 h-5 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 border-r-2 border-t-2 border-cyan-400 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
            </>
          )}

          {/* Textarea */}
          <textarea
            id="diff-input"
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={12}
            className="
              w-full bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90
              text-slate-200 border-0 rounded-xl p-6 font-mono text-sm
              focus:outline-none focus:ring-0 resize-none
              placeholder-slate-500 transition-all duration-300
              scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-800
            "
            style={{
              boxShadow: isFocused
                ? 'inset 0 0 20px rgba(0, 212, 255, 0.1), 0 0 20px rgba(0, 212, 255, 0.2)'
                : 'inset 0 0 10px rgba(0, 0, 0, 0.5)'
            }}
          />

          {/* Character Count Indicator */}
          <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono">
            {value.length} chars
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${value.length > 0 ? 'bg-green-400 animate-pulse' : 'bg-slate-600'}`}></div>
          <span className="text-xs text-slate-400 font-mono">
            {value.length > 0 ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>
      </div>

    </div>
  );
};
