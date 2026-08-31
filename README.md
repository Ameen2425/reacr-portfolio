# Abdul Ameen — Professional Portfolio

> **Full-Stack Python Developer** specializing in **Python • Django • React • AI • MySQL**

A modern, high-performance personal portfolio website built with **React**, **Vite**, **Stitches (`@stitches/react`)**, and **Lucide React**, inspired by high-end dark SaaS product aesthetics.

---

## 🌟 Live Demo & Brand

- **Name**: Abdul Ameen
- **Role**: Full-Stack Python Developer
- **GitHub**: [https://github.com/Ameen2425](https://github.com/Ameen2425)
- **LinkedIn**: [https://www.linkedin.com/in/ameenabdul](https://www.linkedin.com/in/ameenabdul)
- **Email**: [abdulameen200@gmail.com](mailto:abdulameen200@gmail.com)

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18, Vite, JavaScript (ES6+)
- **Styling Architecture**: `@stitches/react` (Custom Design System, Tokens & Media Queries)
- **Icons**: `lucide-react`
- **Typography**: `Inter` (UI & headings) + `JetBrains Mono` (Technical labels & code tags)
- **Deployment Target**: Vercel ready (with `vercel.json` SPA routing support)

---

## 📁 Project Structure

```
abdul-ameen-portfolio/
├── public/
│   ├── favicon.svg                # Custom SVG brand favicon
│   ├── resume.pdf                 # Verified resume PDF
│   └── images/
│       ├── profile/
│       │   └── profile.jpg        # Authentic profile portrait
│       └── projects/
│           ├── attendance.jpg     # Attendance AI visual
│           ├── job-portal.jpg     # Online Job Portal visual
│           ├── exam-generator.jpg # Exam Paper Generator visual
│           ├── carbon-footprint.jpg # Carbon Footprint visual
│           └── adaptive-exam.jpg  # Adaptive Exam Platform visual
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx         # Stitches Button variants
│   │   │   ├── Badge.jsx          # Status and category badges
│   │   │   ├── SectionHeading.jsx # Section header typography
│   │   │   ├── TechTag.jsx        # JetBrains Mono tag pill
│   │   │   └── SocialLinks.jsx    # GitHub, LinkedIn, Mail links
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Sticky glassmorphic navbar
│   │   │   └── Footer.jsx         # Minimal footer
│   │   ├── hero/
│   │   │   └── Hero.jsx           # Two-column hero with photo & CTAs
│   │   ├── skills/
│   │   │   ├── Skills.jsx         # Technological Foundation pills + Toolkit
│   │   │   └── SkillCard.jsx      # Categorized skill cards
│   │   ├── about/
│   │   │   └── About.jsx          # Beyond Just Coding Bento grid
│   │   ├── projects/
│   │   │   ├── Projects.jsx       # Bento showcase & filter
│   │   │   ├── ProjectCard.jsx    # Featured & standard cards
│   │   │   └── ProjectFilter.jsx  # Interactive category pills
│   │   ├── experience/
│   │   │   ├── Experience.jsx     # Professional experience timeline
│   │   │   └── ExperienceCard.jsx # Internship role card
│   │   ├── education/
│   │   │   └── Education.jsx      # B.Tech, Intermediate, SSC cards
│   │   ├── certifications/
│   │   │   └── Certifications.jsx # IBM, Embrizon, Prompt Eng credentials
│   │   └── contact/
│   │       └── Contact.jsx        # Direct reach + Interactive contact form
│   ├── data/
│   │   ├── projects.js            # Structured project data
│   │   ├── skills.js              # Technical toolkit data
│   │   ├── experience.js          # Internship records
│   │   ├── education.js           # Academic milestones
│   │   └── certifications.js      # Verified certifications
│   ├── styles/
│   │   ├── stitches.config.js     # Tokens, breakpoints, and themes
│   │   ├── globalStyles.js        # CSS reset, custom scrollbar
│   │   └── theme.js               # Brand constants and navigation links
│   ├── App.jsx                    # App root composition
│   └── main.jsx                   # Entry point
├── index.html                     # SEO metadata, OpenGraph, fonts
├── package.json                   # Dependencies and build scripts
├── vite.config.js                 # Vite build settings
├── vercel.json                    # Vercel configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚡ Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Abdul Ameen Portfolio"
   git branch -M main
   git remote add origin https://github.com/Ameen2425/portfolio.git
   git push -u origin main
   ```
2. Import the project on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Deploy!

---

## 📄 License
© 2026 Abdul Ameen. All rights reserved.
