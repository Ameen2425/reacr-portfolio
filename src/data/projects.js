export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'AI', 'React'];

export const projects = [
  {
    id: 'job-portal',
    title: 'Online Job Portal',
    badge: 'Featured Full-Stack',
    isFeatured: true,
    category: 'Full Stack',
    categories: ['Full Stack', 'React', 'Django'],
    description:
      'Developed a full-stack job portal with user authentication, job listings, job search, and application management. Built Django REST APIs and connected the React frontend with MySQL to manage users, jobs, and applications.',
    highlights: [
      'Full-stack architecture with Python, Django, React, and MySQL',
      'Django REST APIs for managing users, jobs, and applications',
      'Complete user authentication, job posting, search, and application pipelines',
    ],
    technologies: ['Python', 'Django', 'React', 'MySQL'],
    image: '/images/projects/job-portal.jpg',
    githubUrl: 'https://github.com/Ameen2425/jobPortal',
  },
  {
    id: 'exam-generator',
    title: 'Automated Examination Paper Generator',
    badge: 'AI & Bloom\'s Taxonomy',
    isFeatured: false,
    category: 'AI',
    categories: ['AI'],
    description:
      "Built a Python-based examination paper generator to create structured question papers from defined learning objectives. Implemented question-generation logic using Bloom's Taxonomy to organize questions according to learning levels.",
    highlights: [
      "Structured generation based on Bloom's Taxonomy cognitive levels",
      'Objective-driven automated question paper creation',
    ],
    technologies: ['Python', 'AI', "Bloom's Taxonomy"],
    image: '/images/projects/exam-generator.jpg',
    githubUrl: 'https://github.com/Ameen2425/exam-paper-generator',
  },
  {
    id: 'ameza-ecommerce',
    title: 'AMEZA — E-Commerce Web Application',
    badge: 'React + Redux',
    isFeatured: true,
    category: 'React',
    categories: ['React'],
    description:
      'Developed a responsive e-commerce application using React with product browsing, product details, and shopping cart management. Implemented reusable components, React Router, and Redux state management for navigation and cart interactions.',
    highlights: [
      'Responsive e-commerce UI with product browsing and cart management',
      'Redux state management for seamless cart and navigation interactions',
      'Reusable React components with React Router for SPA navigation',
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Redux'],
    image: '/images/projects/ameza.jpg',
    githubUrl: 'https://github.com/Ameen2425/Ameza-website',
    liveUrl: 'https://nova-x-design.vercel.app/',
  },
  {
    id: 'kiranakart',
    title: 'KiranaKart',
    badge: 'Responsive Frontend',
    isFeatured: false,
    category: 'React',
    categories: ['React'],
    description:
      'Built a responsive grocery shopping website with product categories, product listings, offers, and shopping interactions. Used Bootstrap for responsive layouts and JavaScript event handling for interactive frontend functionality.',
    highlights: [
      'Responsive grocery shopping site with categories and product listings',
      'Bootstrap for adaptive layouts across devices',
      'JavaScript event handling for interactive shopping interactions',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/images/projects/kiranakart.jpg',
    githubUrl: 'https://github.com/Ameen2425/KiranaKart_js',
    liveUrl: 'https://ameen2425.github.io/KiranaKart_js/',
  },
];
