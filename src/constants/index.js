import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    nodejs,
    mongodb,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    milestone,canarymail,
    python,sql,csharp,expressjs,azure,machinelearning,clinicmanagement,customerdataapp,carpriceprediction
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "NodeJs Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Python Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Web Scraping",
      icon: mongodb,
    },
    {
      name: "Expressjs",
      icon: expressjs,
    },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Machine Learning",
      icon: machinelearning,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science and ML Intern",
      company_name: "Canary Mail",
      icon: canarymail,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Developed a machine learning model for phishing email detection using NLP and supervised learning to identify phishing threats in email content.",
        "Built and integrated a phishing link detection model utilizing URL analysis, web scraping, and domain reputation to detect malicious URLs within emails.",
        "Improved email security by 30% through real-time detection and classification of phishing emails and links.",
      ],
    },
    {
      title: " Software Development Engineer Intern ",
      company_name: "Milestone Inc.",
      icon: milestone,
      iconBg: "#E6DEDD",
      date: "January 2023 - July 2023",
      points: [
        "Contributed to developing the FAQ Manager Product, a tool for managing FAQs across websites and Google My Business (GMB) accounts, with automated FAQ generation reducing human interpretation by 25%.",
        "Enhanced legacy .NET APIs to improve performance, optimize resource usage, and reduce operational costs, ensuring greater efficiency and scalability.",
      ],
    },
    {
      title: " Software Development Engineer 1",
      company_name: "Milestone Inc.",
      icon: milestone,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Led the development of the Web Crawler Tool, which scans millions of URLs weekly to collect SEO-related KPIs from live websites, reducing crawling costs by 40% and enhancing web performance analysis and SEO strategy optimization.",
        "Developed the Digital Presence Insights Tool, leveraging a backend crawler to analyze web performance and SEO KPIs for websites and competitors, providing detailed, Google-aligned comparisons for quick decision-making.",
        "Conducted POCs to enhance projects and migrate their tech stacks, improving efficiency and performance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crawling Tool & Digital Presence Report Tool",
      description:
        "Led the development of two innovative tools: a real-time web crawler for efficiently collecting SEO KPIs from millions of URLs and a comprehensive Digital Presence Report (DPR) for quick website health assessments and detailed competitor benchmarking.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "puppteer",
          color: "green-text-gradient",
        },
        {
          name: "azure",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: null,
    },
    {
      name: "Movie Recommendation System",
      description:
        "Developed a personalized movie recommendation system using machine learning algorithms, including collaborative and content-based filtering, to suggest movies based on user preferences and viewing history.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/yshraj/Movie-Recommender-System",
    },
    {
      name: "Customer Data Management App",
      description:
        "Built a full-stack app with Node.js, JavaScript, and Bootstrap for efficient customer data management. Added dynamic search, sorting, pagination, and multi-sheet Excel exports. Designed scalable modules for managing customers and contact details.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
      ],
      image: customerdataapp,
      source_code_link: "https://github.com/yshraj/Customer-Management-App",
    },
    {
      name: "Clinic Management System - HealMe",
      description:
        " Designed and built a web application for managing clinic appointments, patient schedules, and reminders. The platform allows patients to book appointments, while staff can manage patient information and availability.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
      ],
      image: clinicmanagement,
      source_code_link: "https://github.com/yshraj/Healme-Clinic-Management-System",
    },
    {
      name: "Used Car Price Prediction",
      description:
        "The project helps buyers and sellers estimate the market value of used cars. Using features like Present Price, Selling Price, Kms Driven, Fuel Type, and Year, a machine learning model predicts accurate car prices. The dataset for this project was sourced from Kaggle.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carpriceprediction,
      source_code_link: "https://github.com/yshraj/Machine_Learning-and-Deep_Learning_Projects/tree/main/Car_Price_Prediction",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };