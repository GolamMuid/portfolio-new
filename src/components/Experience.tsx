"use client";

import React from "react";
import { experiences } from "../data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Award,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-medium mb-3">
            <span>02. CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            2.5 years of industry experience progressing from Junior Frontend
            Developer to Full Stack Developer &amp; Team Lead.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-900/50 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-200">
                <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-xl shadow-black/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                          Team Lead
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-cyan-400 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Accomplishments */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">
                    Technologies:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:text-white hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
