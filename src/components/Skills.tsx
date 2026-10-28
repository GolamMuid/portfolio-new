"use client";

import React, { useState } from "react";
import { skillCategories } from "../data/portfolioData";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryTheme = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return {
          icon: <Layout className="w-5 h-5 text-cyan-400" />,
          badge: "bg-cyan-950/60 border-cyan-800/50 text-cyan-400",
          accent: "border-cyan-500/30 hover:border-cyan-500/50",
          glow: "from-cyan-900/20 via-transparent to-transparent",
        };
      case "Server":
        return {
          icon: <Server className="w-5 h-5 text-indigo-400" />,
          badge: "bg-indigo-950/60 border-indigo-800/50 text-indigo-400",
          accent: "border-indigo-500/30 hover:border-indigo-500/50",
          glow: "from-indigo-900/20 via-transparent to-transparent",
        };
      case "Database":
        return {
          icon: <Database className="w-5 h-5 text-emerald-400" />,
          badge: "bg-emerald-950/60 border-emerald-800/50 text-emerald-400",
          accent: "border-emerald-500/30 hover:border-emerald-500/50",
          glow: "from-emerald-900/20 via-transparent to-transparent",
        };
      case "Cpu":
        return {
          icon: <Cpu className="w-5 h-5 text-amber-400" />,
          badge: "bg-amber-950/60 border-amber-800/50 text-amber-400",
          accent: "border-amber-500/30 hover:border-amber-500/50",
          glow: "from-amber-900/20 via-transparent to-transparent",
        };
      default:
        return {
          icon: <Cpu className="w-5 h-5 text-indigo-400" />,
          badge: "bg-indigo-950/60 border-indigo-800/50 text-indigo-400",
          accent: "border-indigo-500/30 hover:border-indigo-500/50",
          glow: "from-indigo-900/20 via-transparent to-transparent",
        };
    }
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-medium mb-3">
              <span>04. TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills &amp; Technology Stack
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              A curated breakdown of the modern languages, frameworks, databases
              and engineering tools I build with in production.
            </p>
          </div>

          {/* Quick Search & Legend */}
          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technologies (e.g. Next.js, Docker)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div> */}
        </div>

        {/* Legend bar */}
        {/* <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-slate-800/60">
          <span className="text-slate-500 uppercase tracking-wider text-[11px]">
            Legend:
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="text-slate-300">Core Production Stack</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-slate-400">Familiar &amp; Tooling</span>
          </div>
        </div> */}

        {/* Skills Grid - 2x2 Clean Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const filteredSkills = category.skills.filter((s) =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase()),
            );

            const theme = getCategoryTheme(category.icon);

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 ${theme.accent} transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20 hover:shadow-indigo-950/20 relative overflow-hidden group`}
              >
                {/* Ambient glow top background */}
                <div
                  className={`absolute top-0 right-0 w-64 h-32 bg-gradient-to-b ${theme.glow} pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                        {theme.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                      {filteredSkills.length} techs
                    </span>
                  </div>

                  {/* Tech Tags Cloud */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {filteredSkills.map((skill, sIdx) => {
                      const isHighlighted = skill.highlight;
                      return (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-mono transition-all duration-200 cursor-default ${
                            isHighlighted
                              ? "bg-slate-950 border border-slate-700/80 text-white hover:border-cyan-400/70 hover:shadow-md hover:shadow-cyan-950/30 hover:-translate-y-0.5"
                              : "bg-slate-950/60 border border-slate-800/90 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-900/80 hover:-translate-y-0.5"
                          }`}
                        >
                          {isHighlighted ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)] animate-pulse" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          )}
                          <span
                            className={
                              isHighlighted ? "font-semibold" : "font-normal"
                            }
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer hint */}
                {/* <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-slate-500 text-[11px]">
                    Production Environment
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Experience
                  </span>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
