import React from 'react';
import {
  Compass,
  ArrowUpRight,
  Sparkles,
  BookMarked,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { learningTopics } from '../data/portfolioData';

export const CurrentlyLearningSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-2">
            Continuous Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Current Learning &amp; Technical Expansion
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Actively expanding engineering breadth beyond core undergraduate coursework.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningTopics.map((topic, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {topic.focus}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                <span>In Active Progress</span>
                <Compass className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
