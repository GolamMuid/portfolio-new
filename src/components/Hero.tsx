"use client";

import React from "react";
import { personalInfo } from "../data/portfolioData";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Code2,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, headline, actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm mb-6 hover:border-indigo-500/50 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">Full Stack Web Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">
                2.5 Years Exp
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Specialized in{" "}
              <span className="text-white font-medium">MERN stack</span> &amp;{" "}
              <span className="text-white font-medium">Next.js</span>. I build
              robust APIs, architect intuitive full-stack web applications and
              have led engineering teams delivering real-world impact.
            </p>

            {/* Location & University badge */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-8">
              <span className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Belfast, United Kingdom
              </span>
              {/* <span className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-lg text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                MSc in Computer Science @ Ulster University
              </span> */}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 text-slate-400 border-t border-slate-800/80 pt-6 w-full max-w-xl">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors"
                title="Call phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Window / Tech Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>golam-muid.ts</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  ready
                </span>
              </div>

              {/* Code Editor body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 space-y-1.5">
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-indigo-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Md Golam Muid Talukder&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Full Stack Web Developer&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experienceYears:</span>{" "}
                  <span className="text-amber-300">2.5</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">currentLocation:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Belfast, UK&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;MSc Computer Science @ Ulster Univ&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                </div>
                <div className="pl-8 text-cyan-300">
                  &quot;React.js&quot;, &quot;Next.js&quot;,
                  &quot;TypeScript&quot;, &quot;Node.js&quot;,
                  <br />
                  &quot;Express.js&quot;, &quot;MongoDB&quot;,
                  &quot;PostgreSQL&quot;, &quot;Prisma&quot;
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">leadership:</span>{" "}
                  <span className="text-cyan-300">
                    &quot;Led &amp; mentored 7 MERN developers&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openToOpportunities:</span>{" "}
                  <span className="text-indigo-400">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Bottom bar in card */}
              <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-500">
                  UTF-8 • TypeScript
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Compiled successfully
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
