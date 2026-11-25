import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Brain,
  BarChart,
  ShieldAlert
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Analytics'
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Software &amp; Machine Learning Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical applications built with rigorous testing, verified accuracy metrics, and clean system design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            const isTopProminent = index < 2;

            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                  isTopProminent
                    ? 'border-cyan-500/30 dark:border-cyan-500/30 shadow-md ring-1 ring-cyan-500/10'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Visual Header / Cover */}
                <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.imagePlaceholder.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200 dark:border-slate-800`}>
                  {/* Subtle decorative grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  
                  {/* Top tags */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-900/80 text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                      {project.imagePlaceholder.badge}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500/90 text-white shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Featured Project
                      </span>
                    )}
                  </div>

                  {/* Primary Metric Badge in Header */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="relative z-10 self-start">
                      <div className="inline-flex items-baseline gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 backdrop-blur-md border border-slate-700/80 text-white">
                        <span className="text-xs text-slate-300">{project.metrics[0].label}:</span>
                        <span className="text-base font-extrabold text-cyan-400">{project.metrics[0].value}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.category.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Verified Scope Note (Special Callout for Medical X-ray Project) */}
                  {project.id === 'pneumonia-detection-cnn' && (
                    <div className="p-2.5 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Verified diagnostic scope: NORMAL vs. PNEUMONIA only. Evaluated on 624 clinical test cases.
                      </span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 sm:px-6 bg-slate-50/80 dark:bg-navy-950/40 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        title="Live Demonstration"
                        aria-label={`${project.title} Live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
