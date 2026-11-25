# Subham Mali — Professional Portfolio Website

> **Software Developer | AI & ML Enthusiast**  
> Final-Year B.Sc. Computer Science with Artificial Intelligence  
> Sona College of Arts and Science, Salem, Tamil Nadu, India (Batch 2024–2027)

A recruiter-focused, high-performance personal portfolio website built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Positioned for early-career opportunities in **Software Development**, **Python Engineering**, **Junior Full-Stack Development**, and **AI/Machine Learning**.

---

## 🌟 Highlights & Key Features

- **Strict Authenticity Standard**: Zero fabricated employment, exaggerated metrics, or simulated full-time positions. Clear distinction between production-ready implementations and exploratory prototypes.
- **In-Depth Project Case Studies**:
  - **Quantum-Enhanced AI Medical Image Diagnosis for Pneumonia Detection**: Deep Convolutional Neural Network (CNN) in TensorFlow achieving **92.0% accuracy on a 624-image test dataset** (strict NORMAL vs. PNEUMONIA scope; transparent separation of experimental Qiskit QSVM research).
  - **FitForge**: Full-stack fitness routine management application built with Python, Flask, SQL, and vanilla JS.
  - **Market Sales Prediction**: Historical Walmart sales time-series regression with chronological splitting across Linear, Random Forest, and Gradient Boosting models.
  - **Email Spam Detector**: NLP classifier using TF-IDF feature extraction and Naive Bayes modeling.
- **Categorized Skills Matrix**: 3-tier practical proficiency classification (*Comfortable using*, *Working knowledge*, *Currently learning*) across Programming, Web Dev, Databases, AI/ML, and Python Tooling without fake percentage bars.
- **Interactive Knowledge AI Assistant**: Client-side, zero-hallucination conversational assistant strictly grounded in Subham's verified profile data (no external API keys or privacy leakage).
- **Interactive ATS Resume Viewer**: Clean, printable 2-page curriculum vitae with instant PDF export support.
- **Verified Credentials Showcase**: Filterable gallery of verified credentials from Google Cloud, MongoDB, IBM SkillsBuild, Celonis, and Novitech.
- **Modern Responsive Design**: Deep navy tech aesthetic (`#060A13` / `#0A0F1D`), electric blue and cyan accents, subtle glassmorphism, responsive navigation drawer, and seamless Dark/Light theme switching.
- **Zero-Failure Contact Channel**: Client-side form validation with a reliable `mailto:` handler and one-click email copy.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18, TypeScript (Strict Mode) |
| **Build & Tooling** | Vite 6, PostCSS, Autoprefixer |
| **Styling & Theme** | Tailwind CSS (v3), Custom Deep Navy & Cyan Design Tokens, Dark/Light Mode |
| **Icons** | Lucide React |
| **Data Architecture** | Centralized TypeScript Data Store (`src/data/portfolioData.ts`) |

---

## 📁 Repository Structure

```text
portfolio/
├── public/
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # SEO index mapping
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky glass header, active spy, mobile drawer
│   │   ├── Hero.tsx                     # Recruiter intro, key stats, direct CTAs
│   │   ├── About.tsx                    # Academic trajectory, principles, target roles
│   │   ├── SkillsSection.tsx            # 3-tier proficiency badges & category filters
│   │   ├── ProjectsSection.tsx          # Filterable project cards with prominent highlights
│   │   ├── ProjectModal.tsx             # Deep-dive architecture case studies & metrics
│   │   ├── ExperienceSection.tsx        # Techforge AI & ML internship timeline
│   │   ├── CertificationsSection.tsx    # Filterable credentials & verification links
│   │   ├── CertificationModal.tsx       # Credential detail modal
│   │   ├── EducationSection.tsx         # Sona College academic record & coursework
│   │   ├── CurrentlyLearningSection.tsx # Self-directed technical expansion topics
│   │   ├── ContactSection.tsx           # Contact form, direct mailto, copy email utility
│   │   ├── ResumeModal.tsx              # ATS-formatted printable/exportable CV
│   │   ├── AiAssistant.tsx              # Deterministic profile Q&A assistant
│   │   └── Footer.tsx                   # Navigation links, copyright, back-to-top
│   ├── data/
│   │   └── portfolioData.ts             # Centralized verified candidate data store
│   ├── types/
│   │   └── portfolio.ts                 # Strongly-typed data definitions
│   ├── App.tsx                          # Main application coordinator
│   ├── index.css                        # Tailwind directives, print media styles
│   └── main.tsx                         # React 18 root mounting
├── index.html                           # SEO meta tags, OpenGraph cards, Google Fonts
├── package.json                         # Dependencies and scripts
├── tailwind.config.js                   # Custom design system configuration
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite bundler configuration
└── README.md                            # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/subham-mali/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port specified in terminal).

4. Build for production:
   ```bash
   npm run build
   ```
   Generates an optimized static distribution in the `dist/` directory.

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a secure HTTPS domain with automatic CI/CD on every push.

### Option 2: Deploy to GitHub Pages

1. In `vite.config.ts`, add the base path:
   ```ts
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```
2. In `package.json`, add deployment scripts:
   ```bash
   npm install -D gh-pages
   ```
   Add to `scripts`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy` to publish to `https://subham-mali.github.io/portfolio/`.

---

## 🔒 Security & Environment Notes

- No backend secrets or API keys are bundled or exposed in client assets.
- If integrating external mail services (e.g., EmailJS or a dedicated backend service in the future), store keys in a local `.env` file (prefixed with `VITE_`) and add `.env` to `.gitignore`.

---

## 📬 Contact & Links

- **Candidate**: Subham Mali
- **Email**: [subhamali93444@gmail.com](mailto:subhamali93444@gmail.com)
- **Phone**: +91 6369179408
- **GitHub**: [https://github.com/subham-mali](https://github.com/subham-mali)
- **LinkedIn**: [https://linkedin.com/in/subham-mali-430186321](https://linkedin.com/in/subham-mali-430186321)
- **Location**: Salem, Tamil Nadu, India
