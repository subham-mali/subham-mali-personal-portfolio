import {
  SkillItem,
  Project,
  Experience,
  Certification,
  Education,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Subham Mali',
  role: 'Software Developer | AI & ML Enthusiast',
  tagline: 'Building practical software systems and exploring machine learning solutions with rigorous engineering.',
  location: 'Salem, Tamil Nadu, India',
  email: 'subhamali93444@gmail.com',
  phone: '+91 6369179408',
  phoneRaw: '6369179408',
  github: 'https://github.com/subham-mali',
  linkedin: 'https://linkedin.com/in/subham-mali-430186321',
  college: 'Sona College of Arts and Science',
  degree: 'B.Sc. Computer Science with Artificial Intelligence',
  academicScore: '80.2% (4th Semester)',
  graduationYear: '2027',
  bio: `A final-year Computer Science with Artificial Intelligence student passionate about software engineering, machine learning pipelines, and building practical technology solutions. Focused on writing clean, maintainable code, developing functional full-stack web applications, exploring deep learning architectures, and continuously improving problem-solving abilities.`,
  careerObjective: `Seeking entry-level Software Developer, Python Developer, Junior Full-Stack Engineer, and AI/ML Associate roles where I can contribute solid algorithmic fundamentals, practical web/ML project experience, and an eager appetite for continuous technical growth.`
};

export const skillsData: SkillItem[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 'Comfortable using', highlight: 'Data structures, OOP, scripting, ML workflows' },
  { name: 'Java', category: 'Programming', level: 'Working knowledge', highlight: 'Core Java, OOP principles, collections' },
  { name: 'C', category: 'Programming', level: 'Working knowledge', highlight: 'Low-level fundamentals, pointers, memory logic' },

  // Web Development
  { name: 'HTML5', category: 'Web Development', level: 'Comfortable using', highlight: 'Semantic structure, accessibility' },
  { name: 'CSS3', category: 'Web Development', level: 'Comfortable using', highlight: 'Flexbox, Grid, responsive layouts' },
  { name: 'JavaScript', category: 'Web Development', level: 'Working knowledge', highlight: 'ES6+, DOM manipulation, asynchronous programming' },

  // Database
  { name: 'SQL', category: 'Database', level: 'Working knowledge', highlight: 'Relational queries, joins, filtering, DDL/DML' },
  { name: 'MongoDB', category: 'Database', level: 'Currently learning', highlight: 'Document databases, CRUD operations, aggregation basics' },

  // AI / Machine Learning
  { name: 'Artificial Intelligence Fundamentals', category: 'AI / Machine Learning', level: 'Comfortable using', highlight: 'Search algorithms, heuristic logic, foundational theory' },
  { name: 'Machine Learning', category: 'AI / Machine Learning', level: 'Working knowledge', highlight: 'Supervised learning, classification, regression, clustering' },
  { name: 'Deep Learning Concepts', category: 'AI / Machine Learning', level: 'Working knowledge', highlight: 'Perceptrons, backpropagation, activation functions, loss curves' },
  { name: 'CNN-Based Image Classification', category: 'AI / Machine Learning', level: 'Working knowledge', highlight: 'Convolutional layers, pooling, feature maps, image diagnosis' },
  { name: 'Model Evaluation', category: 'AI / Machine Learning', level: 'Working knowledge', highlight: 'Confusion matrices, precision, recall, F1-score, train/val/test splits' },

  // Python and AI Tools
  { name: 'NumPy', category: 'Python & AI Tools', level: 'Comfortable using', highlight: 'Vectorized operations, n-dimensional array manipulation' },
  { name: 'Pandas', category: 'Python & AI Tools', level: 'Comfortable using', highlight: 'Data cleaning, tabular transformations, exploratory analysis' },
  { name: 'OpenCV', category: 'Python & AI Tools', level: 'Working knowledge', highlight: 'Image loading, color space conversion, resizing, thresholding' },
  { name: 'TensorFlow', category: 'Python & AI Tools', level: 'Working knowledge', highlight: 'Sequential API, Conv2D, model compilation, training callbacks' },
  { name: 'Qiskit', category: 'Python & AI Tools', level: 'Currently learning', highlight: 'Quantum gates, statevectors, exploratory QSVM experimentation' }
];

export const projectsData: Project[] = [
  {
    id: 'pneumonia-detection-cnn',
    title: 'Quantum-Enhanced AI Medical Image Diagnosis for Pneumonia Detection Using Chest X-rays',
    subtitle: 'Deep Learning (CNN) Binary Diagnostic Classifier with Exploratory Quantum Circuit Staging',
    category: ['Artificial Intelligence', 'Machine Learning', 'Software Development'],
    featured: true,
    shortDescription: 'Computer vision diagnostic system analyzing pediatric chest radiographs to classify NORMAL vs. PNEUMONIA cases, achieving 92% test accuracy.',
    fullOverview: `This project tackles clinical decision support by training a deep Convolutional Neural Network (CNN) to detect pneumonia patterns in chest X-ray radiographs. 

The scope is rigorously restricted to binary diagnosis: NORMAL vs. PNEUMONIA (bacterial & viral). To safeguard diagnostic fidelity, the system implements an end-to-end preprocessing pipeline including image resizing (150x150), min-max intensity normalization, and selective augmentation (rotation, zoom, horizontal flips) to handle clinical illumination variations.

The deployed CNN architecture stacks multiple Convolutional and MaxPooling blocks with Dropout regularization, feeding into dense classification layers. On an unseen benchmark test set of 624 clinical chest X-rays, the model achieved a verified classification accuracy of 92%, with strong recall to minimize false negatives in medical screening.

*Note on Quantum Staging*: While the primary production diagnostic engine is a trained Classical CNN (92% accuracy), an exploratory research branch investigates Quantum Support Vector Machines (QSVM) using IBM Qiskit feature maps (ZZFeatureMap) for prospective quantum advantage analysis. The QSVM component remains in an experimental prototype state and is explicitly separated from the verified classical production pipeline.`,
    technologies: ['Python', 'TensorFlow / Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'Qiskit (Experimental)', 'Kaggle Dataset API'],
    metrics: [
      { label: 'Test Accuracy', value: '92.0%', description: 'Evaluated on 624 unseen clinical test images' },
      { label: 'Diagnosis Scope', value: 'Binary', description: 'NORMAL vs. PNEUMONIA only' },
      { label: 'Test Benchmark', value: '624 Images', description: 'Real-world clinical validation sample' }
    ],
    githubUrl: 'https://github.com/subham-mali',
    imagePlaceholder: {
      badge: 'CNN / Medical AI',
      gradient: 'from-blue-600/30 via-cyan-500/20 to-navy-900'
    },
    keyFeatures: [
      'Chest radiograph preprocessing: normalization, adaptive resizing (150x150), and channel realignment.',
      'Data augmentation pipeline mitigating dataset imbalance and position shifts.',
      'Multi-layer Convolutional Neural Network with Dropout layers to prevent overfitting.',
      'Verified 92.0% accuracy on a 624-image test dataset.',
      'Strict clinical scope bounding: diagnostic evaluation restricted strictly to NORMAL and PNEUMONIA.',
      'Transparent separation of the verified Classical CNN from the experimental Qiskit QSVM quantum research branch.'
    ],
    datasetInfo: {
      name: 'Chest X-Ray Images (Pneumonia) Dataset',
      size: '5,863 clinical radiographs',
      details: 'Divided into Train, Validation, and Test cohorts. Rigorously evaluated on 624 unseen test samples.',
      classes: ['NORMAL', 'PNEUMONIA']
    },
    architectureDetails: {
      modelType: 'Sequential Convolutional Neural Network (Conv2D + MaxPool2D + Dense + Dropout)',
      pipeline: [
        'Raw DICOM / JPEG X-Ray Input',
        'OpenCV Greyscale conversion & aspect ratio check',
        'Resize to 150x150 & intensity normalization [0, 1]',
        '3x Conv2D (32/64/128 filters) with ReLU activation & MaxPool2D',
        'Flatten layer with 50% Dropout regularization',
        'Dense 128 units with Sigmoid output activation',
        'Binary Cross-Entropy Loss optimization via Adam'
      ],
      scope: 'NORMAL vs. PNEUMONIA classification only. Does NOT diagnose COVID-19, tuberculosis, or non-pulmonary conditions.',
      experimentalNote: 'Experimental Quantum SVM (QSVM) using Qiskit ZZFeatureMap circuit encoding was benchmarked on reduced-dimension PCA projections for theoretical quantum kernel study. The QSVM remains an ongoing research pipeline.'
    },
    evaluationMetrics: {
      primaryMetric: '92% Test Accuracy',
      scores: {
        'Test Accuracy': '92.0%',
        'Test Dataset Size': '624 radiographs',
        'Loss Metric': 'Binary Crossentropy'
      },
      confusionMatrix: {
        trueNormal: 182,
        falseNormal: 52,
        truePneumonia: 390,
        falsePneumonia: 0
      }
    }
  },
  {
    id: 'fitforge',
    title: 'FitForge',
    subtitle: 'Full-Stack Fitness & Workout Routine Web Application',
    category: ['Software Development', 'Artificial Intelligence'],
    featured: true,
    shortDescription: 'Interactive fitness management platform featuring personalized workout routines, biometric tracking, and an integrated Python/Flask backend.',
    fullOverview: `FitForge is a practical full-stack web application designed to help users track physical conditioning, schedule structured workout routines, and calculate metabolic indices.

Built with a modular Python/Flask backend and a dynamic frontend utilizing semantic HTML5, modern CSS, and vanilla JavaScript, the system demonstrates robust client-server communication, session control, and database persistence.

Implemented features include personalized workout recommendation templates based on user training experience, automated BMI (Body Mass Index) and daily caloric maintenance calculators, and an SQLite-backed activity logging interface. The project emphasizes clean code structure, defensive form validation, and responsive mobile-first UI patterns.`,
    technologies: ['Python', 'Flask', 'SQL / SQLite', 'JavaScript', 'HTML5', 'CSS3', 'REST API Architecture'],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack', description: 'Flask REST backend with reactive frontend' },
      { label: 'Database', value: 'Relational SQL', description: 'Schema for user routines & biometric tracking' },
      { label: 'Scope', value: '100% Implemented', description: 'Verified working features only' }
    ],
    githubUrl: 'https://github.com/subham-mali',
    imagePlaceholder: {
      badge: 'Full-Stack / Flask',
      gradient: 'from-cyan-600/30 via-blue-500/20 to-navy-900'
    },
    keyFeatures: [
      'Personalized workout routine catalog segmented by target muscle groups and experience level.',
      'Algorithmic BMI calculator and basal metabolic rate (BMR) estimation utility.',
      'Flask RESTful endpoints for handling asynchronous workout log creation, retrieval, and deletion.',
      'Relational database integration for structured storage of historical session logs.',
      'Mobile-responsive dashboard interface with clean visual progress indicators.',
      'Defensive input validation on all client forms to prevent malformed data entry.'
    ],
    architectureDetails: {
      modelType: 'MVC Architecture (Flask Backend + SQLite DB + Modular Frontend)',
      pipeline: [
        'Client-side form input & biometric telemetry',
        'Client validation via JavaScript event listeners',
        'JSON payload dispatch via Fetch API',
        'Flask route handlers & authentication checks',
        'SQL parameter binding & CRUD operations',
        'Dynamic DOM mutation without full-page reloads'
      ],
      scope: 'Covers physical fitness tracking, workout planning, and biometric analysis. Verified implementation without non-existent mock endpoints.'
    }
  },
  {
    id: 'market-sales-prediction',
    title: 'Market Sales Prediction Using Machine Learning',
    subtitle: 'Predictive Retail Analytics with Chronological Validation on Historical Walmart Sales Data',
    category: ['Machine Learning', 'Data Analytics'],
    featured: false,
    shortDescription: 'Predictive regression pipeline analyzing historical Walmart retail store data to forecast weekly department sales through rigorous feature engineering.',
    fullOverview: `This project implements an end-to-end tabular machine learning pipeline to forecast department-level retail sales based on historical Walmart transactions. 

The solution emphasizes rigorous data preprocessing: handling missing values, encoding seasonal holiday markers, extracting calendar signals (week of year, month, quarter), and scaling continuous economic variables (CPI, Unemployment rate, Temperature, Fuel price).

To prevent temporal data leakage, the dataset was partitioned using a chronological train/validation/test split. Multiple supervised regression algorithms were systematically benchmarked: Linear Regression, Random Forest Regressor, and Gradient Boosting. Models were rigorously evaluated against Mean Absolute Error (MAE), Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and the Coefficient of Determination (R²).`,
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Time-Series Feature Engineering'],
    metrics: [
      { label: 'Dataset', value: 'Walmart Sales', description: 'Multi-store department transaction history' },
      { label: 'Validation', value: 'Chronological', description: 'Strict time-split avoiding future leakage' },
      { label: 'Algorithms', value: '3 Benchmarked', description: 'Linear, Random Forest, Gradient Boosting' }
    ],
    githubUrl: 'https://github.com/subham-mali',
    imagePlaceholder: {
      badge: 'Data Analytics / ML',
      gradient: 'from-emerald-600/30 via-cyan-500/20 to-navy-900'
    },
    keyFeatures: [
      'Comprehensive data cleaning: missing value imputation, outlier detection, and schema alignment.',
      'Temporal feature engineering: extraction of cyclical week-of-year, holiday indicators, and lagged features.',
      'Chronological splitting protocol preventing future data leakage into training folds.',
      'Systematic comparison of Linear Regression baseline against ensemble tree models (Random Forest, Gradient Boosting).',
      'Comparative evaluation across MAE, MSE, RMSE, and R² regression metrics.',
      'Diagnostic visualizations illustrating actual vs. predicted weekly sales trajectories.'
    ],
    datasetInfo: {
      name: 'Walmart Historical Retail Store Sales Dataset',
      size: '45 retail stores across distinct regions and holiday seasons',
      details: 'Historical transactional records containing store sizes, economic indicators (CPI, fuel, unemployment), and weekly department revenues.'
    },
    architectureDetails: {
      modelType: 'Supervised Tabular Regression Ensemble',
      pipeline: [
        'Raw CSV ingestion via Pandas DataFrame',
        'Imputation of markdown variables & numerical clipping',
        'Categorical encoding of Store Type and Holiday flags',
        'Chronological time-series split (Train / Val / Test)',
        'Model training across Linear, Random Forest, and Gradient Boosting architectures',
        'Hyperparameter adjustment & residual error analysis'
      ],
      scope: 'Weekly sales revenue prediction on historical data. Does not extrapolate arbitrary unseen inventory distributions without real signals.'
    }
  },
  {
    id: 'email-spam-detector',
    title: 'Email Spam Detector',
    subtitle: 'Natural Language Processing Classifier with TF-IDF Vectorization',
    category: ['Machine Learning', 'Artificial Intelligence', 'Software Development'],
    featured: false,
    shortDescription: 'NLP classification pipeline distinguishing spam emails from legitimate messages using tokenization, stopword filtering, and probabilistic modeling.',
    fullOverview: `The Email Spam Detector is a machine learning classification utility designed to automatically filter unwanted, malicious, or promotional spam communications from legitimate user email streams (ham).

The pipeline incorporates standard Natural Language Processing (NLP) text preprocessing: conversion to lower case, punctuation stripping, stopword removal using linguistic dictionaries, and stemming. Cleaned text tokens are converted into numerical feature vectors using Term Frequency-Inverse Document Frequency (TF-IDF).

The transformed feature matrix is fed into classification models including Multinomial Naive Bayes and Logistic Regression. The system outputs both discrete binary predictions (SPAM vs. HAM) and calibrated confidence scores, emphasizing high Precision to prevent false-positive misclassification of critical personal emails.`,
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'NLTK', 'TF-IDF Vectorization'],
    metrics: [
      { label: 'Domain', value: 'NLP Classification', description: 'Text preprocessing & feature extraction' },
      { label: 'Vectorization', value: 'TF-IDF', description: 'Term Frequency - Inverse Document Frequency' },
      { label: 'Model', value: 'Naive Bayes / LR', description: 'Probabilistic spam scoring' }
    ],
    githubUrl: 'https://github.com/subham-mali',
    imagePlaceholder: {
      badge: 'NLP / Classification',
      gradient: 'from-purple-600/30 via-blue-500/20 to-navy-900'
    },
    keyFeatures: [
      'Text sanitization pipeline: lowercasing, regex cleaning, punctuation stripping, and tokenization.',
      'Linguistic stopword filtering and term normalization.',
      'TF-IDF feature extraction weighting rare discriminating vocabulary over ubiquitous terms.',
      'Multinomial Naive Bayes classification with calibrated probability thresholding.',
      'Precision-optimized classification boundary to safeguard genuine incoming correspondence.',
      'Interactive testing harness evaluating custom raw email strings in real-time.'
    ],
    datasetInfo: {
      name: 'SMS / Email Spam Benchmark Corpus',
      size: 'Thousands of tagged real-world SMS/Email messages',
      details: 'Balanced collection of legitimate personal text (HAM) and unsolicited promotional/phishing text (SPAM).'
    },
    architectureDetails: {
      modelType: 'Text Classification with TF-IDF & Multinomial Naive Bayes',
      pipeline: [
        'Raw text message input',
        'Regex sanitization & stopword removal',
        'TF-IDF N-gram feature representation',
        'Multinomial Naive Bayes conditional probability estimator',
        'Classification threshold decision (Spam vs. Ham) + confidence output'
      ],
      scope: 'Binary text classification for email and SMS content.'
    }
  }
];

export const experienceData: Experience[] = [
  {
    id: 'techforge-internship',
    role: 'AI & ML Intern',
    organization: 'Techforge',
    type: 'Internship',
    period: 'Verified Internship Program',
    location: 'Tamil Nadu, India',
    summary: 'Engaged in practical machine learning workflows, data preprocessing protocols, and supervised learning pipelines under technical mentorship.',
    achievements: [
      'Applied supervised machine learning algorithms to structured real-world datasets using Python and Scikit-Learn.',
      'Conducted data cleaning, handling missing observations, categorical encoding, and feature scaling using Pandas and NumPy.',
      'Participated in exploratory data analysis (EDA), generating correlation heatmaps and feature distribution plots with Matplotlib and Seaborn.',
      'Gained hands-on familiarity with model evaluation metrics including precision, recall, F1-score, and confusion matrices.',
      'Collaborated on practical project milestones and documented experiment results.'
    ],
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Data Preprocessing'],
    certificateAvailable: true
  }
];

export const certificationsData: Certification[] = [
  // Google Cloud
  {
    id: 'gc-responsible-ai',
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    category: ['Artificial Intelligence', 'Responsible AI'],
    issueDate: 'August 9, 2026',
    verifiedDate: true,
    description: 'Mastered Google Cloud framework for responsible artificial intelligence deployment, fairness metrics, bias mitigation, and ethical model governance.',
    skillsLearned: ['Responsible AI Principles', 'AI Ethics', 'Bias Mitigation', 'Model Transparency'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400'
  },
  {
    id: 'gc-prompt-design-agent',
    title: 'Prompt Design in Agent Platform',
    issuer: 'Google Cloud',
    category: ['Generative AI and LLMs', 'Prompt Engineering'],
    issueDate: 'August 9, 2026',
    verifiedDate: true,
    description: 'Practiced advanced prompt engineering techniques, zero-shot/few-shot patterns, system instruction design, and task-oriented agent orchestration on Google Cloud.',
    skillsLearned: ['Prompt Design', 'Agent Platforms', 'Few-Shot Learning', 'Context Structuring'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
  },
  {
    id: 'gc-intro-responsible-ai-deprecated',
    title: 'Introduction to Responsible AI [DEPRECATED]',
    issuer: 'Google Cloud',
    category: ['Responsible AI', 'Artificial Intelligence'],
    issueDate: 'August 8, 2026',
    verifiedDate: true,
    isDeprecated: true,
    description: 'Foundational introduction to responsible AI considerations, societal impact assessments, and governance mechanisms on Google Cloud platforms. (Note: Deprecated by issuer in favor of updated curriculum).',
    skillsLearned: ['AI Principles', 'Societal Impact', 'Governance Fundamentals'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400'
  },
  {
    id: 'gc-intro-llm',
    title: 'Introduction to Large Language Models',
    issuer: 'Google Cloud',
    category: ['Generative AI and LLMs', 'Artificial Intelligence'],
    issueDate: 'August 8, 2026',
    verifiedDate: true,
    description: 'Explored transformer-based Large Language Model architectures, pretraining vs fine-tuning dynamics, and conversational AI paradigms within Google Cloud ecosystems.',
    skillsLearned: ['LLM Fundamentals', 'Transformer Concepts', 'Fine-Tuning Basics', 'Generative Text'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400'
  },
  {
    id: 'gc-intro-genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    category: ['Generative AI and LLMs', 'Artificial Intelligence'],
    verifiedDate: false,
    description: 'Foundational certification covering generative model taxonomy, difference from discriminative models, and practical application patterns across multimodal systems.',
    skillsLearned: ['Generative AI Concepts', 'Foundation Models', 'GenAI Applications'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
  },
  {
    id: 'gc-prompt-design-vertex',
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google Cloud',
    category: ['Prompt Engineering', 'Generative AI and LLMs'],
    verifiedDate: false,
    description: 'Earned Google Cloud skill badge validating hands-on lab proficiency in tailoring prompts, temperature/top-k parameter tuning, and grounded generation in Vertex AI.',
    skillsLearned: ['Vertex AI Studio', 'Hyperparameter Tuning', 'Prompt Optimization', 'Grounded Generation'],
    verificationUrl: 'https://www.cloudskillsboost.google',
    badgeColor: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400'
  },

  // MongoDB
  {
    id: 'mongo-crud',
    title: 'CRUD Operations in MongoDB',
    issuer: 'MongoDB',
    category: ['Database Management'],
    issueDate: 'September 9, 2026',
    verifiedDate: true,
    description: 'Demonstrated proficiency in querying, inserting, updating, and deleting unstructured JSON-like documents, projection operators, and filter criteria in MongoDB.',
    skillsLearned: ['MongoDB CRUD', 'Query Operators', 'Document Projections', 'Database Manipulation'],
    verificationUrl: 'https://learn.mongodb.com',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
  },
  {
    id: 'mongo-basics',
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    category: ['Database Management'],
    issueDate: 'August 9, 2026',
    verifiedDate: true,
    description: 'Comprehensive grounding in NoSQL schema design principles, collections, document relationships, and MongoDB Atlas cloud environment setup.',
    skillsLearned: ['NoSQL Architecture', 'MongoDB Atlas', 'Schema Patterns', 'Data Modeling'],
    verificationUrl: 'https://learn.mongodb.com',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
  },

  // IBM SkillsBuild
  {
    id: 'ibm-ai-basics',
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    category: ['Artificial Intelligence'],
    issueDate: 'July 9, 2025',
    verifiedDate: true,
    description: 'Comprehensive curriculum on artificial intelligence history, symbolic reasoning, modern machine learning paradigms, NLP fundamentals, and business applications.',
    skillsLearned: ['AI History & Foundations', 'Natural Language Processing', 'Machine Intelligence', 'Cognitive Systems'],
    verificationUrl: 'https://skillsbuild.org',
    badgeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-400'
  },

  // Celonis
  {
    id: 'celonis-process-intelligence',
    title: 'Process Intelligence Fundamentals',
    issuer: 'Celonis',
    category: ['Process Intelligence', 'Data Analytics'],
    issueDate: 'January 25, 2025',
    verifiedDate: true,
    description: 'Credential covering process mining methodologies, event log data transformation, business process discovery, bottleneck diagnostics, and operational optimization.',
    skillsLearned: ['Process Mining', 'Event Log Analysis', 'Process Optimization', 'Operational Diagnostics'],
    verificationUrl: 'https://www.celonis.com/academy',
    badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400'
  },

  // Novitech
  {
    id: 'novitech-data-analytics',
    title: '30-Day Data Analytics Course Certificate',
    issuer: 'Novitech',
    category: ['Data Analytics'],
    verifiedDate: false,
    description: 'Intensive 30-day program covering analytical data preparation, exploratory data analysis, statistics for analytics, dashboard reporting, and data interpretation.',
    skillsLearned: ['Data Analytics', 'Exploratory Analysis', 'Statistical Interpretation', 'Data Reporting'],
    verificationUrl: 'https://novitech.in',
    badgeColor: 'border-teal-500/40 bg-teal-500/10 text-teal-400'
  }
];

export const educationData: Education = {
  degree: 'Bachelor of Science in Computer Science with Artificial Intelligence',
  institution: 'Sona College of Arts and Science',
  period: '2024 – 2027',
  expectedGraduation: '2027',
  location: 'Salem, Tamil Nadu, India',
  academicPerformance: '80.2% (4th Semester)',
  keyCoursework: [
    'Artificial Intelligence & Expert Systems',
    'Machine Learning & Pattern Recognition',
    'Data Structures & Algorithms',
    'Database Management Systems (SQL)',
    'Object-Oriented Programming (Java & Python)',
    'Computer Networks & Operating Systems',
    'Web Technology Fundamentals'
  ]
};

export const learningTopics = [
  {
    title: 'Advanced Deep Learning & Computer Vision',
    focus: 'Residual networks (ResNet), transfer learning techniques, and fine-tuning pretrained vision backbones for medical imagery.'
  },
  {
    title: 'Production Full-Stack & Cloud Deployment',
    focus: 'RESTful API containerization with Docker, CI/CD pipelines, and cloud hosting architecture on modern platforms.'
  },
  {
    title: 'LLM Prompt Engineering & Agent Systems',
    focus: 'RAG (Retrieval-Augmented Generation) patterns, semantic search embeddings, and LangChain/Agent workflows.'
  },
  {
    title: 'Quantum Computing Foundations (Qiskit)',
    focus: 'Quantum gates, statevectors, and exploring hybrid classical-quantum machine learning algorithms.'
  }
];
