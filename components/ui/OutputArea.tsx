import React, { useState, useEffect } from 'react';
import { ClipboardIcon, DownloadIcon, CheckIcon, SparklesIcon } from '../icons';

interface OutputAreaProps {
  message: string;
  isLoading: boolean;
}

const LoadingHologram: React.FC = () => (
  <div className="relative">
    {/* Holographic Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-lg"></div>

    {/* Scanning Lines */}
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-cyber-scan"></div>
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-cyber-scan" style={{ animationDelay: '1s' }}></div>

    {/* Loading Content */}
    <div className="relative space-y-4 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="text-cyan-300 font-mono text-sm tracking-wide">PROCESSING DATA...</div>
      </div>

      {/* Animated Lines */}
      {[...Array(4)].map((_, i) => (
        <div key={i} className="relative">
          <div className="h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-pulse"></div>
          <div
            className="absolute top-0 left-0 h-4 bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent rounded animate-pulse"
            style={{
              width: '60%',
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s'
            }}
          ></div>
        </div>
      ))}

      {/* Loading Indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const OutputArea: React.FC<OutputAreaProps> = ({ message, isLoading }) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (downloaded) {
      const timer = setTimeout(() => setDownloaded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [downloaded]);

  const handleCopy = async () => {
    if (message) {
      try {
        await navigator.clipboard.writeText(message);
        setCopied(true);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleDownload = () => {
    if (message) {
      const blob = new Blob([message], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'commit-message.md';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloaded(true);
    }
  };

  return (
    <div className="relative">
      {/* Label with Cyberpunk Styling */}
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-purple-400 animate-pulse" />
          <label className="text-lg font-semibold text-purple-300 font-mono tracking-wide">
            AI GENERATED OUTPUT
          </label>
        </div>
        <div className="flex-1 ml-4 h-px bg-gradient-to-r from-purple-400/50 via-transparent to-transparent"></div>
      </div>

      {/* Output Container */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

        {/* Main Container */}
        <div className="relative border-2 border-purple-400/30 rounded-xl overflow-hidden backdrop-blur-sm min-h-[200px]">
          {/* Animated Border Scan Lines */}
          <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-300 ${message && !isLoading ? 'animate-cyber-scan' : ''}`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ${message && !isLoading ? 'animate-cyber-scan' : ''}`} style={{ animationDelay: '0.5s' }}></div>

          {/* Corner Accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-purple-400/60"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-purple-400/60"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-purple-400/60"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-purple-400/60"></div>

          {/* Active Corner Accents */}
          {isHovered && message && !isLoading && (
            <>
              <div className="absolute -top-2 -left-2 w-5 h-5 border-l-2 border-t-2 border-purple-400 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 border-r-2 border-t-2 border-purple-400 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-l-2 border-b-2 border-purple-400 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-r-2 border-b-2 border-purple-400 animate-pulse"></div>
            </>
          )}

          {/* Content Area */}
          <div className="relative p-6 min-h-[180px]">
            {isLoading ? (
              <LoadingHologram />
            ) : message ? (
              <>
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="
                      p-2 text-slate-400 bg-gray-800/50 hover:bg-gray-700/70
                      border border-slate-600/30 hover:border-cyan-400/50
                      rounded-lg transition-all duration-300 hover:scale-110
                      hover:shadow-lg hover:shadow-cyan-500/25
                    "
                    title="Copy to Clipboard"
                  >
                    {copied ? (
                      <CheckIcon className="w-5 h-5 text-green-400 animate-pulse" />
                    ) : (
                      <ClipboardIcon className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="
                      p-2 text-slate-400 bg-gray-800/50 hover:bg-gray-700/70
                      border border-slate-600/30 hover:border-purple-400/50
                      rounded-lg transition-all duration-300 hover:scale-110
                      hover:shadow-lg hover:shadow-purple-500/25
                    "
                    title="Download as Markdown"
                  >
                    {downloaded ? (
                      <CheckIcon className="w-5 h-5 text-green-400 animate-pulse" />
                    ) : (
                      <DownloadIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Message Content */}
                <div className="pr-20">
                  <pre className="whitespace-pre-wrap text-slate-200 font-mono text-sm leading-relaxed">
                    <code className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                      {message}
                    </code>
                  </pre>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400 font-mono">READY</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 border-2 border-slate-600 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 border-2 border-slate-500 rounded-full border-dashed animate-spin"></div>
                </div>
                <p className="text-slate-500 font-mono text-sm tracking-wide">
                  AWAITING INPUT DATA
                </p>
                <p className="text-slate-600 font-mono text-xs mt-2">
                  Generated commit messages will appear here
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Success Feedback */}
        {copied && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-green-900/90 border border-green-400/50 rounded-lg text-green-300 text-xs font-mono animate-fade-in">
            COPIED TO CLIPBOARD
          </div>
        )}

        {downloaded && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-blue-900/90 border border-blue-400/50 rounded-lg text-blue-300 text-xs font-mono animate-fade-in">
            FILE DOWNLOADED
          </div>
        )}
      </div>
    </div>
  );
};
