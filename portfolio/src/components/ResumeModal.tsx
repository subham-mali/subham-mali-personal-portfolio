import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  FileText
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  experienceData,
  projectsData,
  certificationsData,
  skillsData
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-navy-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Controls Header (Hidden in Print) */}
        <div className="no-print flex items-center justify-between p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-500" />
            <h2 id="resume-title" className="text-base font-bold text-slate-900 dark:text-white">
              Curriculum Vitae / Resume &bull; Subham Mali
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm hover:shadow-glow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 bg-white dark:bg-navy-950 text-xs sm:text-sm font-sans leading-relaxed">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 dark:border-slate-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-bold text-blue-600 dark:text-cyan-400 mt-0.5">
              Software Developer | AI &amp; ML Enthusiast
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-500" />
                {personalInfo.location}
              </span>
              <span>&bull;</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-cyan-500" />
                {personalInfo.email}
              </a>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-500" />
                {personalInfo.phone}
              </span>
              <span>&bull;</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/subham-mali
              </a>
              <span>&bull;</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/subham-mali-430186321
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 pt-1 text-xs sm:text-[13px] leading-relaxed">
              Final-year Computer Science with Artificial Intelligence student at Sona College of Arts and Science (80.2% 4th semester average). Practical experience in software development, Python, relational database management (SQL), and applied machine learning. Proven implementation of computer vision diagnostics (92% accuracy on medical chest X-ray benchmark) and full-stack web applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-[13px]">
              <div>
                <strong className="text-slate-900 dark:text-white">{educationData.degree}</strong>
                <div>{educationData.institution}, {educationData.location}</div>
                <div className="text-[11px] text-slate-500 pt-0.5">
                  Relevant Coursework: Machine Learning, Artificial Intelligence, Data Structures, OOP, SQL, Computer Networks.
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-semibold text-cyan-600 dark:text-cyan-400">Score: {educationData.academicPerformance}</div>
                <div className="text-[11px] text-slate-500 font-mono">{educationData.period} (Expected 2027)</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <div><strong>Programming:</strong> Python (Comfortable), Java (Working knowledge), C (Working knowledge)</div>
              <div><strong>Web Development:</strong> HTML5, CSS3, JavaScript (Working knowledge)</div>
              <div><strong>Database:</strong> SQL (Working knowledge), MongoDB (Currently learning CRUD)</div>
              <div><strong>AI &amp; Machine Learning:</strong> AI Fundamentals, ML, Deep Learning, CNNs, Model Evaluation</div>
              <div className="sm:col-span-2"><strong>Libraries &amp; Tools:</strong> NumPy, Pandas, OpenCV, TensorFlow, Qiskit (Exploring)</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Internship &amp; Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs sm:text-[13px]">
                <div className="flex justify-between items-start">
                  <div>
                    <strong className="text-slate-900 dark:text-white">{exp.role}</strong> &bull; {exp.organization}
                  </div>
                  <div className="text-right text-[11px] text-slate-500 font-mono">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Key Technical Projects
            </h2>

            {projectsData.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs sm:text-[13px]">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {proj.title}
                  </div>
                  <div className="text-right text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    {proj.metrics?.[0]?.value || 'Completed'}
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {proj.shortDescription}
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  <strong>Stack:</strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-start gap-1.5">
                  <span className="text-cyan-500">&bull;</span>
                  <span>
                    <strong>{c.title}</strong> – {c.issuer}
                    {c.verifiedDate && c.issueDate ? ` (${c.issueDate})` : ''}
                    {c.isDeprecated ? ' [Deprecated by issuer]' : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer (Hidden in Print) */}
        <div className="no-print p-4 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Click "Print / Save as PDF" to generate a standard 2-page ATS resume.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
