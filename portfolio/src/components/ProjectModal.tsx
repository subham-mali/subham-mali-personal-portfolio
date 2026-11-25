import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Layers,
  Database,
  BarChart3,
  Cpu,
  ShieldCheck,
  Code
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-navy-950/40">
          <div className="pr-6 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                {project.category.join(' • ')}
              </span>
              {project.featured && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Featured Case Study
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-7 text-sm">
          
          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-100/70 dark:bg-navy-950/70 border border-slate-200 dark:border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-xl font-extrabold text-blue-600 dark:text-cyan-400">
                    {m.value}
                  </div>
                  {m.description && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {m.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" />
              Project Architecture &amp; Engineering Overview
            </h3>
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 whitespace-pre-line">
              {project.fullOverview}
            </div>
          </div>

          {/* Scope & Authenticity Guardrail Notice */}
          {project.architectureDetails?.scope && (
            <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/25 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Clinical &amp; Implementation Scope Boundary</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.architectureDetails.scope}
              </p>
              {project.architectureDetails.experimentalNote && (
                <div className="mt-2 pt-2 border-t border-amber-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-1.5">
                  <AlertCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Quantum Component Transparency:</strong> {project.architectureDetails.experimentalNote}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Implementation Pipeline */}
          {project.architectureDetails?.pipeline && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-500" />
                Pipeline Execution Steps
              </h3>
              <div className="space-y-2">
                {project.architectureDetails.pipeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-navy-800/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-mono"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dataset & Evaluation Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.datasetInfo && (
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-navy-950/50 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wider">
                  <Database className="w-3.5 h-3.5 text-blue-500" />
                  Dataset Specifications
                </h4>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <div><strong>Name:</strong> {project.datasetInfo.name}</div>
                  <div><strong>Volume:</strong> {project.datasetInfo.size}</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{project.datasetInfo.details}</p>
                  {project.datasetInfo.classes && (
                    <div className="flex gap-1.5 mt-2">
                      {project.datasetInfo.classes.map(c => (
                        <span key={c} className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Confusion Matrix / Verified Evaluation */}
            {project.evaluationMetrics?.confusionMatrix && (
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-navy-950/50 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wider">
                  <BarChart3 className="w-3.5 h-3.5 text-cyan-500" />
                  Test Set Confusion Matrix (624 Images)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-[10px] text-slate-500 uppercase">True Normal</div>
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {project.evaluationMetrics.confusionMatrix.trueNormal}
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20">
                    <div className="text-[10px] text-slate-500 uppercase">False Normal</div>
                    <div className="text-base font-bold text-amber-600 dark:text-amber-400">
                      {project.evaluationMetrics.confusionMatrix.falseNormal}
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-blue-500/10 border border-blue-500/20">
                    <div className="text-[10px] text-slate-500 uppercase">False Pneumonia</div>
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                      {project.evaluationMetrics.confusionMatrix.falsePneumonia}
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-[10px] text-slate-500 uppercase">True Pneumonia</div>
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {project.evaluationMetrics.confusionMatrix.truePneumonia}
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 text-center">
                  Verified test evaluation score: 92.0% accuracy.
                </p>
              </div>
            )}
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Verified Implemented Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950/50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Repository status: <strong>Open Source on GitHub</strong>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
