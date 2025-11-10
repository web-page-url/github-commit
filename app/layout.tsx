import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Commit - AI-Powered Git Commit Messages",
  description: "Generate professional, conventional commit messages from your code changes using the power of AI. Built by Anubhav.",
  keywords: "git, commit, messages, ai, gemini, conventional commits, code, development, programming",
  authors: [{ name: "Anubhav" }],
  creator: "Anubhav",
  publisher: "Anubhav",
  robots: "index, follow",
  applicationName: "Cyber Commit",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://github-commit.vercel.app"
  },
  openGraph: {
    type: "website",
    title: "Cyber Commit - AI-Powered Git Commit Messages",
    description: "Generate professional, conventional commit messages from your code changes using the power of AI. Built by Anubhav.",
    url: "https://github-commit.vercel.app",
    siteName: "Cyber Commit",
    images: [
      {
        url: "https://github-commit.vercel.app/github-commits.png",
        width: 1200,
        height: 630,
        alt: "Cyber Commit - AI-Powered Git Commit Messages",
        type: "image/png",
      },
      {
        url: "https://github-commit.vercel.app/favicons/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Cyber Commit Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Commit - AI-Powered Git Commit Messages",
    description: "Generate professional, conventional commit messages from your code changes using the power of AI. Built by Anubhav.",
    images: ["https://github-commit.vercel.app/github-commits.png"],
    creator: "@anubhavpattel"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/favicons/favicon-180x180.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://github-commit.vercel.app'),
  other: {
    " pinterest": "nopin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
