import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CertificationModal } from './components/CertificationModal';
import { EducationSection } from './components/EducationSection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { Project, Certification } from './types/portfolio';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('subham_theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek deep navy dark mode
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('subham_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('subham_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
        <About />
        <SkillsSection />
        <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <ExperienceSection />
        <CertificationsSection onSelectCert={(cert) => setSelectedCert(cert)} />
        <EducationSection />
        <CurrentlyLearningSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificationModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* AI Knowledge Assistant */}
      <AiAssistant
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
        onClose={() => setIsAssistantOpen(false)}
      />
    </div>
  );
}

export default App;
