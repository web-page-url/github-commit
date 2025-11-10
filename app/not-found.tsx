'use client';

import React from 'react';
import Link from 'next/link';
import { CommitIcon } from '../components/icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-glow-pulse"></div>
          <div className="relative p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-cyan-400/50 rounded-full shadow-2xl">
            <CommitIcon className="w-16 h-16 text-cyan-400 relative z-10 animate-neon-flicker drop-shadow-lg" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
          404
        </h1>
        
        <h2 className="text-3xl font-semibold mb-4 text-cyan-300">
          Page Not Found
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="
            inline-flex items-center justify-center px-8 py-4 
            bg-gradient-to-r from-gray-900 via-gray-800 to-black 
            border-2 border-cyan-400/50 text-cyan-300 
            rounded-lg font-bold uppercase tracking-wider
            hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25
            transition-all duration-300 hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          "
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}