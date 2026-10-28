'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';
import TerminalWidget from '../components/TerminalWidget';
import { Terminal } from 'lucide-react';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut: Press 'T' or 't' or '`' to toggle interactive terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <BackgroundGlow />
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      
      <div className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      <Footer />

      {/* Floating Terminal Trigger Pill at bottom right */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95 group"
        title="Open interactive terminal (Press 'T')"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
        <Terminal className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-mono font-medium">CLI Mode</span>
        <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
          T
        </kbd>
      </button>

      {/* Interactive Terminal Modal */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}
