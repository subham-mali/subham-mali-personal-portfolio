import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Brain,
  Wrench,
  Check,
  BookOpen,
  Compass,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, ProficiencyLevel } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories: { label: string; value: string; icon: React.ReactNode }[] = [
    { label: 'All Disciplines', value: 'All', icon: <Filter className="w-3.5 h-3.5" /> },
    { label: 'Programming', value: 'Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Web Development', value: 'Web Development', icon: <Globe className="w-3.5 h-3.5" /> },
    { label: 'Database', value: 'Database', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'AI & Machine Learning', value: 'AI / Machine Learning', icon: <Brain className="w-3.5 h-3.5" /> },
    { label: 'Python & AI Tools', value: 'Python & AI Tools', icon: <Wrench className="w-3.5 h-3.5" /> }
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const categoryMatch = selectedCategory === 'All' || skill.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || skill.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelBadge = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Comfortable using':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
            <Check className="w-3 h-3" />
            Comfortable using
          </span>
        );
      case 'Working knowledge':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/25">
            <Compass className="w-3 h-3" />
            Working knowledge
          </span>
        );
      case 'Currently learning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/25">
            <BookOpen className="w-3 h-3" />
            Currently learning
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Practical Skills &amp; Proficiencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Organized by verifiable hands-on competence without artificial percentage bars or exaggerated claims.
          </p>
        </div>

        {/* Proficiency Level Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 p-3 rounded-xl bg-slate-100/70 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto text-xs">
          <span className="text-slate-600 dark:text-slate-400 font-medium">Proficiency Tiers:</span>
          <button
            onClick={() => setSelectedLevel(selectedLevel === 'Comfortable using' ? 'All' : 'Comfortable using')}
            className={`cursor-pointer transition-opacity ${selectedLevel !== 'All' && selectedLevel !== 'Comfortable using' ? 'opacity-40' : 'opacity-100'}`}
          >
            {getLevelBadge('Comfortable using')}
          </button>
          <button
            onClick={() => setSelectedLevel(selectedLevel === 'Working knowledge' ? 'All' : 'Working knowledge')}
            className={`cursor-pointer transition-opacity ${selectedLevel !== 'All' && selectedLevel !== 'Working knowledge' ? 'opacity-40' : 'opacity-100'}`}
          >
            {getLevelBadge('Working knowledge')}
          </button>
          <button
            onClick={() => setSelectedLevel(selectedLevel === 'Currently learning' ? 'All' : 'Currently learning')}
            className={`cursor-pointer transition-opacity ${selectedLevel !== 'All' && selectedLevel !== 'Currently learning' ? 'opacity-40' : 'opacity-100'}`}
          >
            {getLevelBadge('Currently learning')}
          </button>
          {selectedLevel !== 'All' && (
            <button
              onClick={() => setSelectedLevel('All')}
              className="text-[11px] underline text-cyan-600 dark:text-cyan-400"
            >
              Reset tier filter
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card rounded-xl p-5 shadow-sm hover:shadow-md border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {skill.category.split(' ')[0]}
                  </span>
                </div>

                {skill.highlight && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.highlight}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-600 dark:text-slate-400">Status</span>
                {getLevelBadge(skill.level)}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No technical skills found matching the selected filter criteria.
          </div>
        )}

      </div>
    </section>
  );
};
