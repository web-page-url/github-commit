'use client';

import React, { useState } from 'react';
import { Header } from '../components/ui/Header';
import { InputArea } from '../components/ui/InputArea';
import { OutputArea } from '../components/ui/OutputArea';
import { ActionButton } from '../components/ui/ActionButton';
import { SparklesIcon } from '../components/icons';
import { generateCommitMessage } from '../services/gemini';

export default function Home() {
  const [diff, setDiff] = useState('');
  const [commitMessage, setCommitMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const exampleDiff = `diff --git a/src/components/Button.tsx b/src/components/Button.tsx
index 83d1c87..b2e4f56 100644
--- a/src/components/Button.tsx
+++ b/src/components/Button.tsx
@@ -1,7 +1,7 @@
 import React from 'react';

 interface ButtonProps {
-  children: React.ReactNode;
+  children: React.ReactNode;
   onClick?: () => void;
   variant?: 'primary' | 'secondary';
 }

@@ -12,6 +12,7 @@ export const Button: React.FC<ButtonProps> = ({
   return (
     <button
       onClick={onClick}
+      disabled={disabled}
       className="btn primary"
     >
       {children}
     </button>
   );
 });`;

  const handleGenerate = async () => {
    if (!diff.trim()) {
      setError('Please enter your code changes first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setCommitMessage('');

    try {
      const message = await generateCommitMessage(diff);
      setCommitMessage(message);
    } catch (err) {
      setError('Failed to generate commit message. Please check your API key and try again.');
      console.error('Error generating commit message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiff(event.target.value);
    if (error) setError('');
  };

  return (
    <div className="min-h-screen py-4 px-3 sm:py-8 sm:px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center space-y-8 sm:space-y-12">
          {/* Header Section */}
          <div className="animate-fade-in w-full flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <Header />
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full flex flex-col items-center space-y-6 sm:space-y-8">
            {/* Input Section */}
            <div className="animate-slide-in-up w-full max-w-4xl px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
              <InputArea
                value={diff}
                onChange={handleInputChange}
                placeholder="Paste your git diff output here for optimal results..."
                exampleInput={exampleDiff}
              />
            </div>

            {/* Error Display */}
            {error && (
              <div className="animate-fade-in w-full max-w-3xl px-4 sm:px-0" style={{ animationDelay: '0.1s' }}>
                <div className="p-4 bg-red-900/50 border border-red-500/30 rounded-xl text-red-300 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm tracking-wide">SYSTEM ERROR</span>
                  </div>
                  <p className="mt-2 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="animate-slide-in-up w-full flex justify-center px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
              <ActionButton
                onClick={handleGenerate}
                disabled={isLoading || !diff.trim()}
                variant="primary"
                size="lg"
                className="w-full max-w-md sm:w-auto touch-manipulation"
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                {isLoading ? 'PROCESSING...' : 'GENERATE COMMIT MESSAGE'}
              </ActionButton>
            </div>

            {/* Output Section */}
            <div className="animate-slide-in-up w-full max-w-4xl px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
              <OutputArea message={commitMessage} isLoading={isLoading} />
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full max-w-4xl mt-8 sm:mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="border-t border-cyan-400/20 pt-8">
              <div className="text-center">
                <p className="text-sm text-slate-400 font-mono">
                  Created by{' '}
                  <a
                    href="https://anubhav-webpage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline decoration-cyan-400/50 hover:decoration-cyan-300"
                  >
                    Anubhav
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
