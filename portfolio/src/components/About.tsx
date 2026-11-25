import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle2,
  Terminal,
  Target,
  Award,
  Layers
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            Profile &amp; Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Foundations &amp; Career Trajectory
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Dedicated to software craftsmanship, reliable machine learning pipelines, and turning algorithmic concepts into functional, testable software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-500" />
                About Subham
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a final-year undergraduate pursuing a <strong>B.Sc. in Computer Science with Artificial Intelligence</strong> at <strong>Sona College of Arts and Science</strong> in Salem, Tamil Nadu. My academic path merges classical computational theory with applied artificial intelligence, focusing on software engineering principles, algorithm design, and data-driven systems.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                In my project work, I emphasize verified functionality over surface-level complexity. Whether implementing a <strong>Convolutional Neural Network (CNN)</strong> for medical image screening with a measured 92% diagnostic accuracy, building full-stack web architectures with Flask and relational SQL, or structuring reproducible tabular predictive analytics, my objective is to write clean, maintainable code with transparent boundaries.
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Core Engineering Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Evidence-based model evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Clean modular Python &amp; SQL architectures</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Defensive input validation &amp; testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Continuous self-directed learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles Card */}
            <div className="glass-card rounded-2xl p-6 shadow-sm border border-cyan-500/20 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Target Roles &amp; Opportunities
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Actively seeking entry-level technical roles including:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      'Software Developer / Engineer Fresher',
                      'Python Developer',
                      'Junior Full-Stack Developer',
                      'AI / Machine Learning Engineer (Junior)',
                      'Generative AI / LLM Application Intern',
                      'Data Analytics Engineer Fresher'
                    ].map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Fact Matrix Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Academic Snapshot Card */}
            <div className="glass-card rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-500" />
                Academic Snapshot
              </h3>

              <div className="space-y-3.5">
                <div className="border-l-2 border-cyan-500 pl-3 py-0.5">
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Undergraduate Degree</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {educationData.degree}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {educationData.institution}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60">
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Graduation
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      Batch 2027
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Final-Year Student</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60">
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-500" />
                      Semester Score
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      80.2%
                    </div>
                    <div className="text-[10px] text-slate-500">4th Semester Verified</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Campus Location: Salem, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Verified Coursework */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Key Academic Coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.keyCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-4 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
              <div className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                Verified &amp; Transparent Information
              </div>
              <p className="leading-relaxed text-[11px] text-slate-500 dark:text-slate-400">
                This portfolio adheres to rigorous recruitment ethics: no simulated job experiences, no exaggerated skills bars, and full clarity between implemented features and experimental prototypes.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
