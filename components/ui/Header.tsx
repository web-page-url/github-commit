import React from 'react';
import { CommitIcon, SparklesIcon } from '../icons';

export const Header: React.FC = () => {
  return (
    <header className="text-center relative mb-4">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Icon Container with Cyberpunk Styling */}
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-glow-pulse"></div>
        <div className="relative p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-cyan-400/50 rounded-full shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-cyber-scan"></div>
          <CommitIcon className="w-12 h-12 text-cyan-400 relative z-10 animate-neon-flicker drop-shadow-lg" />
          <SparklesIcon className="w-6 h-6 text-purple-400 absolute -top-1 -right-1 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Corner Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
      </div>

      {/* Main Title with Advanced Animations */}
      <div className="relative mb-6">
        <h1 className="text-5xl md:text-7xl font-bold animate-fade-in drop-shadow-2xl">
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
              CYBER
            </span>
            {/* Enhanced glow effect */}
            <span className="absolute inset-0 text-cyan-300 blur-sm opacity-75 animate-pulse">
              CYBER
            </span>
            <span className="absolute inset-0 text-cyan-400 blur-md opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }}>
              CYBER
            </span>
          </span>
          <br className="md:hidden" />
          <span className="md:ml-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            COMMIT
          </span>
        </h1>

        {/* Glitch Effect Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Subtitle with Cyberpunk Styling */}
      <div className="relative max-w-3xl mx-auto mt-2">
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed animate-slide-in-up mb-4">
          <span className="text-cyan-400 font-semibold">AI-Powered</span> commit message generation
          <br className="hidden md:block" />
          <span className="text-purple-400">⚡</span> Transform your git history with professional conventional commits
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="px-3 py-1.5 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 rounded-full text-sm text-cyan-300 font-mono backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
            <span className="text-cyan-400">◇</span> Gemini AI
          </div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-400/30 rounded-full text-sm text-blue-300 font-mono backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="text-blue-400">◇</span> Conventional Commits
          </div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-400/30 rounded-full text-sm text-purple-300 font-mono backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="text-purple-400">◇</span> Cyberpunk UI
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-4 flex justify-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
    </header>
  );
};