"use client";

import React, { useState } from "react";
import { projects, Project } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ArrowUpRight,
  Info,
  Bot,
  Building2,
  FlaskConical,
  GraduationCap,
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Next.js & AI", "Enterprise", "Full Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "edu-ai":
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case "drug-international":
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case "kyamch-bio-research":
        return <FlaskConical className="w-6 h-6 text-emerald-400" />;
      case "dev-train":
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  const getCardGradient = (id: string) => {
    switch (id) {
      case "edu-ai":
        return "from-cyan-900/40 via-slate-900 to-indigo-950/40";
      case "drug-international":
        return "from-indigo-900/40 via-slate-900 to-slate-900";
      case "kyamch-bio-research":
        return "from-emerald-950/50 via-slate-900 to-slate-900";
      case "dev-train":
        return "from-amber-950/40 via-slate-900 to-slate-900";
      default:
        return "from-slate-900 via-slate-900 to-slate-950";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-medium mb-3">
              <span>03. PORTFOLIO WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              Production web applications, client solutions, and full-stack
              software built with Next.js, React, Node.js, and cloud backends.
            </p>
          </div>

          {/* Filter Tabs (temporarily commented out) */}
          {/*
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/20 hover:shadow-indigo-950/30 hover:-translate-y-1"
            >
              {/* Card visual banner header */}
              <div
                className={`p-6 bg-gradient-to-br ${getCardGradient(project.id)} border-b border-slate-800/80 flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-inner">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* {project.featured && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                )} */}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Highlights snippet */}
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="text-xs text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/40 text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                        title="Open live website"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                        title="GitHub source code"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Deep Dive</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
