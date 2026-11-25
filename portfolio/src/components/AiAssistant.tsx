import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import {
  personalInfo,
  skillsData,
  projectsData,
  certificationsData,
  educationData,
  experienceData
} from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I am Subham's Portfolio Knowledge Assistant. I can answer questions about Subham's technical skills, machine learning projects (including the 92% accuracy CNN model), verified certifications, education at Sona College, or contact details. What would you like to know?`,
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What are Subham\'s key AI/ML projects?',
    'What is his diagnostic accuracy for Pneumonia detection?',
    'What are his primary programming languages?',
    'What credentials does he hold?',
    'Tell me about his academic performance & college',
    'How do I schedule an interview with Subham?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    // Pneumonia / Medical / X-ray / Accuracy / Quantum
    if (q.includes('pneumonia') || q.includes('x-ray') || q.includes('xray') || q.includes('chest') || q.includes('accuracy') || q.includes('92%') || q.includes('quantum') || q.includes('qsvm')) {
      return `**Pneumonia Detection Project Details:**\n\n• **Model Architecture:** Sequential Convolutional Neural Network (CNN) built in TensorFlow/Keras with OpenCV preprocessing.\n• **Verified Metric:** Achieved **92.0% classification accuracy** on an unseen test cohort of 624 clinical radiographs.\n• **Diagnostic Scope:** Strictly **NORMAL vs. PNEUMONIA** only (does NOT diagnose COVID-19, tuberculosis, etc.).\n• **Quantum Note:** Features an exploratory research component investigating Qiskit Quantum SVM (QSVM) circuits, but the production diagnostic engine is the validated 92% Classical CNN.`;
    }

    // Projects general
    if (q.includes('project') || q.includes('fitforge') || q.includes('sales') || q.includes('spam') || q.includes('walmart')) {
      return `Subham has built 4 key technical projects:\n\n1. **Quantum-Enhanced AI Medical Image Diagnosis for Pneumonia**: A 92% test accuracy CNN classifier for chest radiographs (624 test images).\n2. **FitForge**: A full-stack workout & fitness management application built with Python, Flask, SQL, and responsive frontend.\n3. **Market Sales Prediction**: A retail regression forecasting model evaluated on historical Walmart data across Linear, Random Forest, and Gradient Boosting algorithms.\n4. **Email Spam Detector**: An NLP text classifier using TF-IDF feature extraction and Naive Bayes modeling.`;
    }

    // Skills / Stack / Languages
    if (q.includes('skill') || q.includes('tech stack') || q.includes('language') || q.includes('python') || q.includes('java') || q.includes('sql') || q.includes('tools')) {
      return `**Subham's Technical Competencies (Strictly Verified):**\n\n• **Programming:** Python (*Comfortable*), Java (*Working knowledge*), C (*Working knowledge*)\n• **Web Development:** HTML5, CSS3 (*Comfortable*), JavaScript (*Working knowledge*)\n• **Databases:** SQL (*Working knowledge*), MongoDB (*Currently learning CRUD*)\n• **AI & ML:** CNN architectures, Supervised Learning, Model Evaluation (*Working knowledge*)\n• **Libraries & Tools:** NumPy, Pandas, OpenCV, TensorFlow, Qiskit (Exploring).\n\n*Note:* Subham does not use inflated percentage skill bars and emphasizes transparent competency tiers.`;
    }

    // Education / College / Degree / Marks / Percentage
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('sona') || q.includes('percentage') || q.includes('score') || q.includes('gpa') || q.includes('graduat')) {
      return `**Academic Background:**\n\n• **Degree:** ${educationData.degree}\n• **Institution:** ${educationData.institution}, Salem, Tamil Nadu, India\n• **Status:** Final-Year Student (2024–2027), Expected Graduation: 2027\n• **Academic Score:** **80.2%** (4th Semester Verified Average)\n• **Coursework:** AI, Machine Learning, Data Structures, OOP, DBMS/SQL, Computer Networks.`;
    }

    // Experience / Internship / Techforge
    if (q.includes('experience') || q.includes('intern') || q.includes('techforge') || q.includes('work')) {
      return `**Internship Experience:**\n\n• **Role:** AI & ML Intern at **Techforge**\n• **Program:** Verified Academic Internship Program\n• **Key Activities:** Built supervised ML pipelines using Scikit-Learn, performed data preprocessing, handled missing values and feature scaling in Pandas/NumPy, executed exploratory data analysis, and evaluated models with precision, recall, and confusion matrices.\n• Completion certificate is verified and available.`;
    }

    // Certifications / Google / MongoDB / IBM / Celonis / Novitech
    if (q.includes('certif') || q.includes('credential') || q.includes('google') || q.includes('mongo') || q.includes('ibm') || q.includes('celonis') || q.includes('novitech') || q.includes('vertex')) {
      return `**Verified Professional Credentials:**\n\n• **Google Cloud:** Responsible AI (Aug 9, 2026), Prompt Design in Agent Platform (Aug 9, 2026), Introduction to LLMs (Aug 8, 2026), Prompt Design in Vertex AI, Intro to GenAI, and Intro to Responsible AI (Deprecated).\n• **MongoDB:** CRUD Operations (Sep 9, 2026), MongoDB Basics for Students (Aug 9, 2026).\n• **IBM SkillsBuild:** Getting Started with AI (Jul 9, 2025).\n• **Celonis:** Process Intelligence Fundamentals (Jan 25, 2025).\n• **Novitech:** 30-Day Data Analytics Course Certificate.`;
    }

    // Contact / Interview / Hire / Email / Phone
    if (q.includes('contact') || q.includes('hire') || q.includes('interview') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('resume')) {
      return `**Connect with Subham:**\n\n• **Email:** [subhamali93444@gmail.com](mailto:${personalInfo.email})\n• **Phone:** ${personalInfo.phone}\n• **Location:** Salem, Tamil Nadu, India\n• **GitHub:** [github.com/subham-mali](${personalInfo.github})\n• **LinkedIn:** [linkedin.com/in/subham-mali-430186321](${personalInfo.linkedin})\n\nSubham responds to recruitment communications within 24 hours.`;
    }

    // Default bounded response
    return `Subham Mali is a final-year B.Sc. Computer Science with AI student at Sona College of Arts and Science (80.2% 4th sem score). He specializes in Python software engineering and AI/ML applications, having built a 92% accurate medical CNN classifier, the FitForge web app, and multiple machine learning models. \n\nYou can ask me specific questions about his **skills**, **projects**, **certifications**, **internship at Techforge**, or **contact info**.`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAnswer(query);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: responseText,
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open AI Portfolio Assistant"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-200 border border-cyan-400/30 group"
        >
          <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
          <span>Ask AI Assistant</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>
      )}

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] h-[85vh] bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 text-left">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
                <Bot className="w-4 h-4 text-cyan-200" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5 leading-tight">
                  Portfolio AI Assistant
                  <span className="text-[10px] font-normal px-1.5 py-0.2 rounded bg-white/20">Verified</span>
                </h3>
                <p className="text-[11px] text-cyan-100">Grounded in Subham Mali's profile</p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close assistant"
              className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-100 dark:bg-navy-950 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-800/80'
                  }`}
                >
                  <div className="whitespace-pre-line text-xs leading-normal">
                    {msg.text}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-8">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
                <span>Checking verified candidate database...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-navy-950/40">
            <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Suggested Questions:
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-navy-800 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700 transition-colors flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, accuracy..."
                className="flex-1 px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-slate-600 dark:text-slate-400 mt-1.5 px-1">
              <span>Strictly zero hallucination &bull; Grounded facts</span>
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
            </div>
          </div>

        </div>
      )}
    </>
  );
};
