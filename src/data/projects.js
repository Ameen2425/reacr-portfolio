export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'AI', 'React', 'Django'];

export const projects = [
  {
    id: 'job-portal',
    title: 'Online Job Portal',
    badge: 'Featured Full-Stack + AI',
    isFeatured: true,
    category: 'Full Stack',
    categories: ['Full Stack', 'AI', 'React', 'Django'],
    description:
      'Engineered a full-stack AI-powered job portal using Python, Django, React, and MySQL with user authentication, job listings, job search, and application management. Integrated AI-driven functionality to enhance job discovery and candidate-job matching, creating a more personalized recruitment experience.',
    highlights: [
      'Full-stack architecture with Python, Django, React, and MySQL',
      'AI candidate-job matching algorithms for personalized recruitment',
      'Complete authentication, job posting, search, and application pipelines',
    ],
    technologies: ['Python', 'Django', 'React', 'AI', 'MySQL'],
    image: '/images/projects/job-portal.jpg',
    githubUrl: 'https://github.com/Ameen2425',
  },
  {
    id: 'attendance-system',
    title: 'Facial Recognition-Based Automated Attendance System',
    badge: 'AI & Computer Vision',
    isFeatured: false,
    category: 'AI',
    categories: ['AI', 'Full Stack', 'Django'],
    description:
      'Created an AI-powered attendance management system with Python, Django, OpenCV, and SQLite to automate attendance recording. Implemented face detection and recognition workflows to streamline attendance recording and minimize manual data entry.',
    highlights: [
      'Real-time face detection and feature recognition with OpenCV',
      'Automated attendance logging with SQLite backend',
    ],
    technologies: ['Python', 'Django', 'OpenCV', 'SQLite'],
    image: '/images/projects/attendance.jpg',
    githubUrl: 'https://github.com/Ameen2425',
  },
  {
    id: 'exam-generator',
    title: 'Automated Examination Paper Generator',
    badge: 'AI & NLP',
    isFeatured: false,
    category: 'AI',
    categories: ['AI'],
    description:
      "Built an automated exam paper generator using Python and Bloom's Taxonomy to produce structured examination content. Structured question-generation logic around defined learning objectives to ensure balanced cognitive assessments.",
    highlights: [
      "Structured generation based on Bloom's Taxonomy cognitive levels",
      'Objective-driven automated question balancing',
    ],
    technologies: ['Python', 'AI', "Bloom's Taxonomy"],
    image: '/images/projects/exam-generator.jpg',
    githubUrl: 'https://github.com/Ameen2425',
  },
  {
    id: 'carbon-footprint',
    title: 'Carbon Footprint Monitoring Platform',
    badge: 'Interactive Analytics',
    isFeatured: false,
    category: 'Full Stack',
    categories: ['Full Stack', 'React', 'Django'],
    description:
      'Built a carbon footprint monitoring platform with React, Tailwind CSS, Django, and SQLite, featuring interactive dashboards. Added carbon tracking and data visualization features to present environmental impact through an intuitive interface.',
    highlights: [
      'Interactive visual dashboard for emissions analytics',
      'Real-time carbon footprint calculation & reporting',
    ],
    technologies: ['React', 'Tailwind CSS', 'Django', 'SQLite'],
    image: '/images/projects/carbon-footprint.jpg',
    githubUrl: 'https://github.com/Ameen2425',
  },
  {
    id: 'adaptive-exam',
    title: 'Adaptive Online Examination System',
    badge: 'EdTech & Adaptive Algorithms',
    isFeatured: false,
    category: 'React',
    categories: ['React'],
    description:
      'Created an adaptive online examination platform using React and Python with performance-based question difficulty. Applied performance-based question selection to personalize the examination workflow and accurately calibrate student proficiency.',
    highlights: [
      'Dynamic question difficulty adaptation based on student responses',
      'Responsive testing interface built with React',
    ],
    technologies: ['React', 'Python'],
    image: '/images/projects/adaptive-exam.jpg',
    githubUrl: 'https://github.com/Ameen2425',
  },
];
