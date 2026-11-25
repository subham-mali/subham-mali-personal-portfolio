import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Building2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certification, CredentialCategory } from '../types/portfolio';

interface CertificationsSectionProps {
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCert }) => {
  const [activeCategory, setActiveCategory] = useState<CredentialCategory>('All');

  const categories: CredentialCategory[] = [
    'All',
    'Artificial Intelligence',
    'Generative AI and LLMs',
    'Prompt Engineering',
    'Responsible AI',
    'Database Management',
    'Data Analytics',
    'Process Intelligence'
  ];

  const filteredCerts = certificationsData.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category.includes(activeCategory);
  });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications &amp; Professional Learning
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Industry credentials from Google Cloud, MongoDB, IBM SkillsBuild, Celonis, and Novitech.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 font-semibold'
                  : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-5 shadow-sm hover:shadow-md border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Issuer Badge & Deprecated Marker */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border ${cert.badgeColor}`}>
                    <Building2 className="w-3 h-3" />
                    {cert.issuer}
                  </span>

                  {cert.isDeprecated ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20" title="Issuer replaced with updated curriculum">
                      <AlertTriangle className="w-3 h-3" />
                      Deprecated
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Date Display */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>
                    {cert.verifiedDate && cert.issueDate
                      ? `Issued: ${cert.issueDate}`
                      : 'Issue Date: Verification Pending'}
                  </span>
                </div>

                {/* Description Excerpt */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectCert(cert)}
                  className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Details &amp; Skills</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-cyan-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={`Verify on ${cert.issuer}`}
                    aria-label={`Verify ${cert.title} on ${cert.issuer}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Footer */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/70 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-500 inline-block mr-1.5 -mt-0.5" />
          Dates and credentials strictly represent genuine issuer certificates without duplicated or simulated IDs.
        </div>

      </div>
    </section>
  );
};
