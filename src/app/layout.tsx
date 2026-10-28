import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/ThemeContext';

export const metadata: Metadata = {
  title: 'Md Golam Muid Talukder | Full Stack Web Developer (MERN & Next.js)',
  description: 'Full Stack Web Developer with 2.5 years of experience specializing in React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. MSc Computer Science student at Ulster University, Belfast, UK.',
  keywords: [
    'Md Golam Muid Talukder',
    'Golam Muid',
    'Full Stack Developer',
    'MERN Stack',
    'Next.js Developer',
    'React Developer',
    'Software Engineer Belfast',
    'UK Software Engineer',
    'Portfolio',
    'TypeScript',
  ],
  authors: [{ name: 'Md Golam Muid Talukder', url: 'https://github.com/GolamMuid' }],
  openGraph: {
    title: 'Md Golam Muid Talukder | Full Stack Web Developer',
    description: 'Full Stack Developer with 2.5 years experience. MERN stack, Next.js, cloud systems, and engineering team leadership.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-indigo-500/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
