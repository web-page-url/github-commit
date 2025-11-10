'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDebugInfo = async () => {
      try {
        const response = await fetch('/api/debug');
        const data = await response.json();
        setDebugInfo(data);
      } catch (error) {
        console.error('Error fetching debug info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDebugInfo();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-cyan-400">Loading debug information...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <Head>
        <title>Debug - Cyber Commit</title>
      </Head>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Social Media Preview Debug</h1>
        
        <div className="bg-gray-900/50 border border-cyan-400/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Open Graph Preview Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-cyan-300 font-medium">Title</h3>
              <p className="text-slate-200">{debugInfo?.socialPreviewInfo?.title}</p>
            </div>
            
            <div>
              <h3 className="text-cyan-300 font-medium">Description</h3>
              <p className="text-slate-200">{debugInfo?.socialPreviewInfo?.description}</p>
            </div>
            
            <div>
              <h3 className="text-cyan-300 font-medium">OG Image URL</h3>
              <p className="text-slate-200 break-all">{debugInfo?.socialPreviewInfo?.ogImage}</p>
            </div>
            
            <div>
              <h3 className="text-cyan-300 font-medium">Image Preview</h3>
              <img 
                src={debugInfo?.socialPreviewInfo?.ogImage} 
                alt="OG Preview" 
                className="mt-2 max-w-full h-auto rounded-lg border border-cyan-400/30"
                width={600}
                height={315}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 border border-purple-400/30 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Testing Instructions</h2>
          
          <div className="space-y-4 text-slate-200">
            <p>To test how your website appears when shared on social media:</p>
            
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Facebook:</strong> Use the{' '}
                <a 
                  href="https://developers.facebook.com/tools/debug/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Facebook Sharing Debugger
                </a>
              </li>
              <li>
                <strong>Twitter:</strong> Use the{' '}
                <a 
                  href="https://cards-dev.twitter.com/validator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Twitter Card Validator
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong> Use the{' '}
                <a 
                  href="https://www.linkedin.com/post-inspector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  LinkedIn Post Inspector
                </a>
              </li>
              <li>
                <strong>WhatsApp/Instagram:</strong> These platforms typically cache previews. 
                Try sharing the link in a private chat to see the preview.
              </li>
            </ol>
            
            <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-400/30 rounded-lg">
              <h3 className="text-yellow-400 font-medium mb-2">Note about caching:</h3>
              <p>
                Social media platforms heavily cache preview information. If you've made recent changes, 
                you may need to use the platform-specific debugging tools to force a refresh of the preview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}