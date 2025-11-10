'use client';

import React from 'react';

export default function FaviconTestPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Favicon Test Page</h1>
        
        <div className="bg-gray-900/50 border border-cyan-400/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Favicon Verification</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-cyan-300 font-medium mb-2">How to check if your favicon is working:</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-200">
                <li>Hard refresh this page (Ctrl+F5 or Cmd+Shift+R)</li>
                <li>Check the browser tab icon - it should show your custom favicon, not the Vercel one</li>
                <li>Look at your bookmarks bar - if you bookmark this page, it should show the custom favicon</li>
                <li>Check your browser's favicon cache (varies by browser)</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-cyan-300 font-medium mb-2">Favicon URLs:</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-200">
                <li>
                  ICO format: <a href="/favicon.ico" target="_blank" className="text-cyan-400 hover:underline">/favicon.ico</a>
                </li>
                <li>
                  PNG 16x16: <a href="/favicons/favicon-16x16.png" target="_blank" className="text-cyan-400 hover:underline">/favicons/favicon-16x16.png</a>
                </li>
                <li>
                  PNG 32x32: <a href="/favicons/favicon-32x32.png" target="_blank" className="text-cyan-400 hover:underline">/favicons/favicon-32x32.png</a>
                </li>
                <li>
                  PNG 180x180 (Apple Touch): <a href="/favicons/favicon-180x180.png" target="_blank" className="text-cyan-400 hover:underline">/favicons/favicon-180x180.png</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-cyan-300 font-medium mb-2">Favicon Preview:</h3>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <img src="/favicon.ico" alt="Favicon ICO" className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">ICO (16x16, 32x32)</p>
                </div>
                <div className="text-center">
                  <img src="/favicons/favicon-16x16.png" alt="Favicon 16x16" className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">PNG 16x16</p>
                </div>
                <div className="text-center">
                  <img src="/favicons/favicon-32x32.png" alt="Favicon 32x32" className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">PNG 32x32</p>
                </div>
                <div className="text-center">
                  <img src="/favicons/favicon-180x180.png" alt="Favicon 180x180" className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">PNG 180x180</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-900/30 border border-yellow-400/30 rounded-lg p-4">
              <h3 className="text-yellow-400 font-medium mb-2">Troubleshooting:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                <li>If you still see the Vercel favicon, try clearing your browser cache</li>
                <li>Try opening the site in an incognito/private browser window</li>
                <li>Some browsers cache favicons very aggressively; you may need to restart your browser</li>
                <li>Check that your deployment has completed successfully</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}