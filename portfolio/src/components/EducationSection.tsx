import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-slate-100/60 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Formal Education &amp; Coursework
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  {educationData.institution}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <div className="sm:text-right space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <Award className="w-3.5 h-3.5" />
                Score: {educationData.academicPerformance}
              </span>
              <div className="text-xs text-slate-500 dark:text-slate-400 flex sm:justify-end items-center gap-1 font-mono pt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.period} &bull; Expected {educationData.expectedGraduation}</span>
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Relevant Completed &amp; Ongoing Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {educationData.keyCoursework.map((course, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-navy-950/50 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
