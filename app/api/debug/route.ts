import { NextResponse } from 'next/server';

export async function GET() {
  const debugInfo = {
    timestamp: new Date().toISOString(),
    message: "Cyber Commit API Debug Endpoint",
    socialPreviewInfo: {
      ogImage: "https://github-commit.vercel.app/github-commits.png",
      ogImageSize: "1200x630",
      favicon: "https://github-commit.vercel.app/favicon.ico",
      siteName: "Cyber Commit",
      title: "Cyber Commit - AI-Powered Git Commit Messages",
      description: "Generate professional, conventional commit messages from your code changes using the power of AI. Built by Anubhav."
    }
  };

  return NextResponse.json(debugInfo);
}