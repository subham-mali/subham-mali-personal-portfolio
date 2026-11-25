import React from 'react';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles,
  Cpu,
  Brain,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAssistant }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects (subtle, professional) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Final-Year B.Sc. CS with AI
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                Sona College &bull; Graduating 2027
              </span>
            </div>

            {/* Headline and Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
                {personalInfo.role}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Verified Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3 rounded-xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academic Score</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">80.2%</div>
                <div className="text-[11px] text-slate-500">4th Semester Verified</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Model Accuracy</div>
                <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">92.0%</div>
                <div className="text-[11px] text-slate-500">Chest X-ray CNN (624 Test)</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Stack</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 truncate">Python &bull; SQL &bull; AI</div>
                <div className="text-[11px] text-slate-500">TensorFlow &bull; Flask</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md hover:shadow-glow-md transition-all duration-200 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-navy-900 hover:bg-slate-50 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenAssistant}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 transition-all duration-200"
                title="Ask the AI portfolio assistant about Subham's projects and skills"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Profile Q&A</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-600 dark:text-slate-400 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs font-mono truncate max-w-[150px] sm:max-w-none">{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Profile Card / Architectural Showcase Visual */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-25 blur-lg group-hover:opacity-40 transition duration-500" />
              
              <div className="relative rounded-2xl glass-panel p-6 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-5">
                
                {/* Profile Placeholder Avatar */}
                <div className="flex items-center gap-4">
                  <div className="relative w-18 h-18 rounded-2xl bg-gradient-to-tr from-navy-800 to-blue-600 p-0.5 shadow-md flex-shrink-0">
                    <div className="w-16 h-16 rounded-[14px] bg-slate-900 flex flex-col items-center justify-center text-white">
                      <span className="text-2xl font-black font-mono tracking-tighter text-cyan-400">SM</span>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">B.Sc AI</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Subham Mali</h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">B.Sc. CS with AI &bull; 2027</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sona College of Arts and Science</p>
                  </div>
                </div>

                {/* Technical Focus Badge Matrix */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Primary Competencies
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/60">
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <Code2 className="w-3.5 h-3.5 text-blue-500" />
                        Software Development
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 font-semibold">Python &bull; SQL</span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/60">
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <Brain className="w-3.5 h-3.5 text-cyan-500" />
                        Machine Learning & CNNs
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">TensorFlow &bull; OpenCV</span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/60">
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <Cpu className="w-3.5 h-3.5 text-purple-500" />
                        Exploratory Quantum Computing
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold">Qiskit Circuits</span>
                    </div>
                  </div>
                </div>

                {/* Candidate Credibility Guarantee */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Recruiter Note:</strong> All listed projects, benchmarks, and credentials reflect verified coursework and documented repositories.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
