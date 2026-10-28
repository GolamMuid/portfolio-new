"use client";

import React from "react";
import { personalInfo, languages } from "../data/portfolioData";
import { Users, RefreshCw, Layers, Globe2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: "Engineering Team Leadership",
      description:
        "Mentored and guided a cross-functional squad of 7 MERN developers, institutionalizing code reviews, CI practices and sprint cadences.",
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description:
        "Led end-to-end migrations of monolithic Oracle Forms applications into high-throughput and maintainable MERN microservices and SPAs.",
    },
    {
      icon: Layers,
      title: "Full-Stack Architecture",
      description:
        "Crafted enterprise web applications with TypeScript, Next.js, Node.js, Express, PostgreSQL, Prisma, MongoDB and modern UI systems.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-medium mb-3">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background
            {/* &amp; Engineering Philosophy */}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Combining 2.5 years of production software engineering with solid
            academic foundations in computing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              I am a{" "}
              <strong className="text-white font-semibold">
                Full Stack Web Developer
              </strong>{" "}
              with 2.5 years of hands-on professional experience delivering
              user-centered, robust digital products. My core expertise centers
              on the{" "}
              <span className="text-indigo-400 font-medium">MERN stack</span>{" "}
              (MongoDB, Express.js, React, Node.js) and modern{" "}
              <span className="text-cyan-400 font-medium">
                Next.js &amp; TypeScript
              </span>{" "}
              ecosystems.
            </p>

            <p>
              During my tenure at{" "}
              <span className="text-white font-medium">ATI Limited</span>, I
              progressed from Junior Frontend Developer to Full Stack Developer
              &amp; Team Lead. I had the privilege of leading a team of 7 MERN
              developers, directing architectural choices and successfully
              delivering enterprise-grade web solutions for major clients
              including{" "}
              <span className="text-white font-medium">
                <Link
                  href="https://www.drug-international.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Drug International Limited
                </Link>
              </span>{" "}
              (one of Bangladesh&apos;s foremost pharmaceutical firms) and{" "}
              <span className="text-white font-medium">
                <Link
                  href="https://kyabrs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KYAMCH Bio-research Services
                </Link>
              </span>
              .
            </p>

            <p>
              Beyond greenfield applications, I specialized in modernizing
              legacy applications—decoupling monolithic Oracle Forms setups and
              migrating them to modern and highly responsive React and Node.js
              solutions that significantly lowered maintenance costs and
              enhanced daily user experience.
            </p>

            <p>
              I am currently located in{" "}
              <span className="text-white font-medium">
                Belfast, United Kingdom
              </span>
              and completed my{" "}
              <span className="text-indigo-300 font-medium">
                MSc in Computer Science at Ulster University
              </span>
              . This study has strengthened my mastery of distributed systems,
              cloud computing and software design principles.
            </p>

            {/* Language proficiency pill */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                Languages:
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-medium text-white">{lang.name}:</span>
                    <span className="text-slate-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 group-hover:text-cyan-300 group-hover:bg-indigo-900/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
