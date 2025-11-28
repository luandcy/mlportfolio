export const siteConfig = {
  name: "Luan Dechery",
  title: "Machine Learning and Statistics student",
  description: "Portfolio website of Luan Dechery",
  accentColor: "#1d4ed8",
  social: {
    email: "dechery.luan@gmail.com",
    linkedin: "https://www.linkedin.com/in/luan-dechery/",
    cv: "/mlportfolio/cv_ldechery.pdf",
    github: "https://github.com/luandcy",
  },
  aboutMe:
    "Currently in my final year of a Master's degree in MIASHS, specializing in machine learning algorithms with a strong statistical foundation. I'm passionate about leveraging new technologies and methods to explore data in insightful and transformative ways. My goal is to deepen my expertise in data analysis and inference to build powerful predictive models. My interests span transportation, environmental and health data, NLP, and social sciences—though I'm open to exploring other domains. I'm driven to solve real-world problems through data and contribute to meaningful projects that align with my values.",
  skills: ["Python", "R", "Pandas", "Scikit-learn", "SQL", "Power BI"],
  
  projects: [
    {
      name: "Single Cell RNA-seq Analysis for Cancer Research",
      description:
        "Research internship project analyzing single-cell RNA sequencing data from skin cancer patients. Leveraged variational autoencoders (scVI) to handle high-dimensional, sparse biological data. Explored multiple visualization methods (t-SNE, UMAP, PCA, Spectral Embedding) to reveal meaningful clustering patterns and biological structure across patient samples.",
      link: "https://github.com/luandcy/m1-stage-scanalysis",
      skills: ["Python", "scVI", "t-SNE", "UMAP", "Bioinformatics"],
    },
    {
      name: "French Twitter Sentiment Analysis",
      description:
        "Built a sentiment classification system for 1.5M French tweets using NLP techniques. Implemented text preprocessing pipeline with SpaCy, compared multiple ML models (Naive Bayes, Logistic Regression, SVC), and achieved 0.80 F1-score through hyperparameter optimization of Logistic Regression.",
      link: "https://github.com/luandcy/m1-nlp-sentiment-analysis",
      skills: ["Python", "NLP", "SpaCy", "Machine Learning", "Text Classification"],
      image: "/mlportfolio/projects/project1.jpg"
    },
    {
      name: "Signature Transform for Time-Series Classification",
      description:
        "Implemented signature and log-signature transforms from rough path theory for medical time-series analysis. Conducted systematic hyperparameter optimization to evaluate signature depth, regularization, and dimensionality trade-offs. Demonstrated log-signatures' superior stability in high-dimensional feature spaces.",
      link: "https://github.com/luandcy/m2-log-signature",
      skills: ["Python", "Time-Series Analysis", "Signature transform", "Tensor manipulation"],
    },
  ],

  education: [
    {
      school: "Université Lumière Lyon 2",
      degree: "Master's Degree - MIASHS (Applied Mathematics & Computer Science)",
      dateRange: "2024 - Present",
      achievements: [
        "Conducted data analysis and visualization projects on transportation systems",
        "Developed NLP sentiment analysis pipeline for large-scale Twitter data",
        "Implemented machine learning models with rigorous validation strategies",
      ],
    },
    {
      school: "Université Lumière Lyon 2",
      degree: "Bachelor's Degree - MIASHS",
      dateRange: "2020 - 2024",
      achievements: [
        "Built full-stack web application with SQL database",
        "Created fraud detection system using statistical modeling in R",
        "Developed collaborative Java application using OOP principles",
      ],
    },
  ],
};
