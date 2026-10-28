'use client';

import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top Left Indigo Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] dark:bg-indigo-500/20" />
      
      {/* Top Right Cyan Glow */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] dark:bg-cyan-500/20" />
      
      {/* Center Violet Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] dark:bg-violet-600/15" />
      
      {/* Bottom Emerald Glow */}
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] dark:bg-emerald-500/15" />

      {/* Subtle Dot Matrix Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
