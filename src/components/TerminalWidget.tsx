"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  personalInfo,
  projects,
  experiences,
  skillCategories,
  educationList,
} from "../data/portfolioData";
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  CornerDownLeft,
} from "lucide-react";

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalWidget({
  isOpen,
  onClose,
}: TerminalWidgetProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Welcome to Golam Muid&apos;s Interactive Portfolio CLI v1.0.0
          </p>
          <p className="text-xs text-slate-400">
            Type{" "}
            <span className="text-indigo-400 font-semibold">
              &apos;help&apos;
            </span>{" "}
            to see available commands or{" "}
            <span className="text-indigo-400 font-semibold">
              &apos;exit&apos;
            </span>{" "}
            to close.
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-indigo-400 font-bold mb-1">
              Available Commands:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-slate-300">
              <div>
                <span className="text-cyan-400">whoami / about</span> -
                Developer overview
              </div>
              <div>
                <span className="text-cyan-400">skills</span> - Technical
                competencies
              </div>
              <div>
                <span className="text-cyan-400">projects</span> - Production
                applications
              </div>
              <div>
                <span className="text-cyan-400">experience</span> - Work history
                &amp; leadership
              </div>
              <div>
                <span className="text-cyan-400">education</span> - Degrees &amp;
                credentials
              </div>
              <div>
                <span className="text-cyan-400">contact</span> - Email, phone,
                socials
              </div>
              <div>
                <span className="text-cyan-400">cat resume</span> - View /
                download resume
              </div>
              <div>
                <span className="text-cyan-400">clear</span> - Clear terminal
                screen
              </div>
              <div>
                <span className="text-cyan-400">exit</span> - Close terminal
                window
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
      case "about":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-white font-bold">
              {personalInfo.name} ({personalInfo.shortName})
            </p>
            <p className="text-indigo-400">
              {personalInfo.tagline} • 2.5 Years Experience
            </p>
            <p className="text-slate-400">{personalInfo.location}</p>
            <p className="mt-2 text-slate-300">{personalInfo.summary}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx}>
                <span className="text-indigo-400 font-bold">{cat.title}: </span>
                <span className="text-slate-300">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            {projects.map((p, idx) => (
              <div key={idx} className="pb-1 border-b border-slate-800">
                <span className="text-cyan-400 font-bold">{p.title}</span> (
                {p.category})
                <p className="text-slate-400">{p.shortDescription}</p>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Stack: {p.technologies.join(", ")}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-xs">
            {experiences.map((exp, idx) => (
              <div key={idx} className="pb-1 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">{exp.role}</span> @{" "}
                {exp.company} ({exp.period})
                <p className="text-slate-400">{exp.location}</p>
                <p className="text-slate-300 mt-1">{exp.description[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-2 text-xs">
            {educationList.map((edu, idx) => (
              <div key={idx}>
                <span className="text-indigo-400 font-bold">{edu.degree}</span>
                <p className="text-slate-300">
                  {edu.institution} • {edu.year}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p>
              Email:{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-cyan-400 underline"
              >
                {personalInfo.email}
              </a>
            </p>
            <p>
              Phone: <span className="text-cyan-400">{personalInfo.phone}</span>
            </p>
            <p>
              GitHub:{" "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                {personalInfo.github}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                {personalInfo.linkedin}
              </a>
            </p>
            <p>
              Location:{" "}
              <span className="text-emerald-400">{personalInfo.location}</span>
            </p>
          </div>
        );
        break;

      case "cat resume":
      case "resume":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">
              Md-Golam-Muid-Talukder-Resume.pdf
            </p>
            <p>Resume is available to download directly:</p>
            <a
              href="/Md-Golam-Muid-Talukder-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-indigo-400 underline font-mono"
            >
              👉 Click to open / download /resume.pdf
            </a>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        onClose();
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Command not recognized: &apos;{cmd}&apos;. Type{" "}
            <span className="text-cyan-400 font-semibold">
              &apos;help&apos;
            </span>{" "}
            for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-3xl h-[520px] rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
              title="Close terminal"
            />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              golam@muid-portfolio: ~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/95 text-slate-200">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-indigo-400">
                <span className="text-emerald-400 font-bold">
                  visitor@portfolio
                </span>
                <span className="text-slate-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Current Input Line */}
          <form
            onSubmit={handleCommand}
            className="flex items-center gap-2 text-xs pt-1"
          >
            <span className="text-emerald-400 font-bold">
              visitor@portfolio
            </span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help' or any command..."
              className="flex-1 bg-transparent text-white focus:outline-none caret-cyan-400 placeholder:text-slate-700"
              autoFocus
            />
            <button
              type="submit"
              className="text-slate-600 hover:text-slate-300"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>
            Shortcuts: &apos;clear&apos; to wipe • &apos;exit&apos; or ESC to
            close
          </span>
          <span className="text-emerald-400 font-semibold">
            ● Online &amp; Ready
          </span>
        </div>
      </div>
    </div>
  );
}
