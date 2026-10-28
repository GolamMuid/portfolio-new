"use client";

import React from "react";
import { educationList } from "../data/portfolioData";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 relative border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-medium mb-3">
            <span>05. EDUCATION &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Rigorous academic foundations in Computer Science from the United
            Kingdom and Bangladesh.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Degrees */}
          <div className="lg:col-span-7 space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  idx === 0
                    ? "bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border-indigo-700/60 shadow-lg shadow-indigo-950/20"
                    : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap
                      className={`w-5 h-5 ${idx === 0 ? "text-cyan-400" : "text-indigo-400"}`}
                    />
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {edu.year}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-cyan-400 font-medium mb-3">
                  <span>{edu.institution}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    {edu.location}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Academic Focus & Language Badge */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Core Disciplines Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Core Competencies</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Underpinned by formal education across software engineering,
                computing systems and algorithmic analysis:
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Software Architecture",
                  "Distributed Systems",
                  "Data Structures & Algorithms",
                  "Database Systems",
                  "Object-Oriented Design",
                  "Cloud Computing",
                  "Web Engineering",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Language & English IELTS Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>Language &amp; Communication</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <div className="text-sm font-bold text-white">English</div>
                    <div className="text-xs text-slate-400">
                      Professional Working Proficiency
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                    IELTS 7.5
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <div className="text-sm font-bold text-white">Bangla</div>
                    <div className="text-xs text-slate-400">Native Speaker</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
