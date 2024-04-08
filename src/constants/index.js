import {
    python,
    cplus,
    c,
    javascript,
    typescript,
    mysql,
    html,
    css,
    microsoft,
    manulife,
    titanium,
    chsarp,

    // Projects
    flapneat,
    edumentor,
    forge,
    sensor,
    portfolio,
    gradeScope,
    gradeCharts,
    snake,
    compiler,
    assembler,
    teamSync,

    // tools
    pt,
    tf,
    spark,
    kuber,
    jup,
    git, 
    docker,
    terra,
    elastic,

    // Frameworks
    dj,
    flask,
    nodejs,
    sb,
    fast,
    hadoop,
    keras,
    sk,
    three,

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

  const languages = [
    {
      title: "Python",
      icon: python,
    },
    {
      title: "C++",
      icon: cplus,
    },
    {
      title: "C",
      icon: c,
    },
    {
      title: "C#",
      icon: chsarp
    },
    {
      title: "JavaScript",
      icon: javascript
    },
    {
      title: "TypeScript",
      icon: typescript
    },
    {
      title: "MySQL",
      icon: mysql
    },
    {
      title: "HTML",
      icon: html
    },
    {
      title: "CSS",
      icon: css
    }
  ];

  const tools = [
    {
      title: "PyTorch",
      icon: pt
    },
    {
      title: "TensorFlow",
      icon: tf
    },
    {
      title: "Spark",
      icon: spark
    },
    {
      title: "Kubernetes",
      icon: kuber
    },
    {
      title: "Jupyter Notebooks",
      icon: jup
    },
    {
      title: "Git",
      icon: git
    },
    {
      title: "Docker",
      icon: docker
    },
    {
      title: "Terraform",
      icon: terra
    },
    {
      title: "Elasticsearch",
      icon: elastic
    }
  ];

  const frameworks = [
    {
      title: "Django",
      icon: dj
    },
    {
      title: "Flask",
      icon: flask
    },
    {
      title: "Node.js",
      icon: nodejs
    },
    {
      title: "Spring Boot",
      icon: sb
    },
    {
      title: "Fast.ai",
      icon: fast
    },
    {
      title: "Hadoop",
      icon: hadoop
    },
    {
      title: "Keras",
      icon: keras
    },
    {
      title: "Scikit-learn",
      icon: sk
    },
    {
      title: "ThreeJS",
      icon: three
    }
  ]
  
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "January 2022 - May 2022",
      points: [
        "Produced Linear Regression algorithms to monitor sales of Big Data on Microsoft SQL Servers",
        "Improved systems predictive accuracy by 25% through integrating neural networks into autonomous systems using TensorFlow and PyTorch libraries (TF-Agents, ONNX)",
        "Implemented Machine Learning chatbot using Azure Dev and Python to aid in designs for a fast number of roles",
        "Improved query performance by 25% by building optimised complex queries on MongoDB in NoSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Manulife",
      icon: manulife,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Developed a cloud-native app with React and Node.js for 1M+ users, achieving 40% faster responsiveness and 99.99% uptime using Docker and Kubernetes.",
        "Implemented CI/CD with automated testing on AWS, cutting development time by 50% and ensuring zero downtime deployments.",
        "Enhanced an e-commerce platform's UX, leading to a 30% rise in engagement and 25% increase in sales by leveraging advanced JavaScript and CSS3.",
        "Integrated AI into a CRM backend, automating data insights and boosting customer satisfaction by 20% with machine learning algorithms.",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Manulife",
      icon: manulife,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Designed and deployed a secure, compliant data lake, enabling advanced analytics and machine learning capabilities, resulting in a 25% increase in operational efficiency and data-driven decision-making.",
        "Implemented real-time data processing using Apache Kafka and Spark, facilitating instant insights for a high-traffic web application, improving user experience, and enabling dynamic pricing strategies.",
        "Automated ETL pipelines with Python and Apache Airflow, reducing data processing time by 60% and enhancing data quality for analytics across multiple sources.",
        "Architected and optimized a data warehouse for a Fortune 500 company, leading to a 50% improvement in data retrieval times and supporting business intelligence insights with technologies like Redshift and Snowflake.",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Titanium",
      icon: titanium,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Engineered robust serverless data pipelines on Google Cloud with C#, enhancing data flow and processing speed, resulting in a 35% improvement in efficiency.",
        "Led MySQL to Google Cloud SQL migrations, optimizing storage and access, significantly increasing data security and operational agility.",
        "Developed and optimized Python-based ETL processes using Google Cloud Dataflow, achieving a 40% decrease in data latency and doubling analytics throughput.",
        "Designed a scalable, secure data lake in Google Cloud Storage using custom C# connectors, facilitating advanced analytics and ML projects with a 30% boost in processing efficiency.",
      ],
    },
  ];
  
  const categories = [
    { id: 1, name: 'AI/ML' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Game Dev' },
    { id: 4, name: 'Miscellaneous' },
    // Add more categories here
  ];  
  
  const projects = [
    {
      name: "EduMentor",
      category: 'AI/ML',
      description:
        "AI chatbot tailored to University of Waterloo's courses. Developed through fine-tuning of GPT to help students navigate their academic paths with ease.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Data Science",
          color: "pink-text-gradient",
        },
      ],
      image: edumentor,
      source_code_link: "https://github.com/adimehta9/EduMentor/",
    },
    {
      name: "Predictive Sensor Insights",
      category: 'AI/ML',
      description:
        "ML solution designed to revolutionise sensor data analysis through Time Series Clustering. Predicts missing data at times as well as detects anomalies automatically.",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "Kafka",
          color: "green-text-gradient",
        },
        {
          name: "Prometheus",
          color: "pink-text-gradient",
        },
      ],
      image: sensor,
      source_code_link: "https://github.com/adimehta9/Predictive-Sensor-Insights/",
    },
    {
      name: "ML Forge",
      category: 'AI/ML',
      description:
        "Dynamic exploration hub featuring diverse ML models and datasets, highlighting my ML journey with different algorithmic solutions to unique challenges.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "BigDataAnalytics",
          color: "green-text-gradient",
        },
        {
          name: "DeepLearning",
          color: "pink-text-gradient",
        },
      ],
      image: forge,
      source_code_link: "https://github.com/adimehta9/ML-Forge/",
    },
    {
      name: "FlapNEAT Bird",
      category: 'AI/ML',
      description:
        "Leverage principles from research paper linked in repo, developed AI system for the iconic Flappy Bird. Mimics natural selection to learn and survive.",
      tags: [
        {
          name: "NEATS",
          color: "blue-text-gradient",
        },
        {
          name: "Evolutionary",
          color: "green-text-gradient",
        },
        {
          name: "NeuralNets",
          color: "pink-text-gradient",
        },
      ],
      image: flapneat,
      source_code_link: "https://github.com/adimehta9/FlapNEAT-Bird/",
    },
    {
      name: "Web Portfolio",
      category: 'Frontend',
      description:
        "Interactive 3D webpage powered by Three.js highlighting my journey as a software engineer, whether it be skills, work experience or projects. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "Inception",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/adimehta9/adimehta9.github.io/",
    },
    {
      name: "Grade Scope",
      category: 'Frontend',
      description:
        "Kotlin-developed project offering interactive platform where users can input academic courses, grades, timelines, etc, enabling real-time data analytics. ",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "DataAnalysis",
          color: "green-text-gradient",
        },
        {
          name: "RealTime",
          color: "pink-text-gradient",
        },
      ],
      image: gradeScope,
      source_code_link: "https://github.com/adimehta9/GradeScope/",
    },
    {
      name: "Grade Sight Charts",
      category: 'Frontend',
      description:
        "Kotlin-developed project offering interactive platform where users can input academic courses, grades, timelines, etc, enabling real-time data analytics. ",
      tags: [
        {
          name: "DataVisual",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Charts",
          color: "pink-text-gradient",
        },
      ],
      image: gradeCharts,
      source_code_link: "https://github.com/adimehta9/GradeSight-Charts/",
    },
    {
      name: "CC3K",
      category: 'Game Dev',
      description:
        "Will Update Soon",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Console",
          color: "green-text-gradient",
        },
        {
          name: "DecoratorPattern",
          color: "pink-text-gradient",
        },
      ],
      image: gradeCharts,
      source_code_link: "https://github.com/adimehta9/CC3K-2.0/",
    },
    {
      name: "Infinite Serpent",
      category: 'Game Dev',
      description:
        "Will Update Soon",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "GameDev",
          color: "green-text-gradient",
        }
      ],
      image: snake,
      source_code_link: "https://github.com/adimehta9/Infinite-Serpent/",
    },
    {
      name: "Team Sync",
      category: 'Miscellaneous',
      description:
        "Dynamic React tool empowering employers to efficiently manage workforce. Leverages Google Maps API for employers to direct employees to desired locations at specific times",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleMapsAPI",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: teamSync,
      source_code_link: "https://github.com/adimehta9/TeamSync/",
    },
    {
      name: "WLP4 Compiler",
      category: 'Miscellaneous',
      description:
        "Will Update Soon",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "GameDev",
          color: "green-text-gradient",
        },
        {
          name: "DecoratorPattern",
          color: "pink-text-gradient",
        },
      ],
      image: compiler,
      source_code_link: "https://github.com/adimehta9/WLP4-Compiler",
    },
    {
      name: "MIPS Assembler",
      category: 'Miscellaneous',
      description:
        "Will Update Soon",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "GameDev",
          color: "green-text-gradient",
        },
        {
          name: "DecoratorPattern",
          color: "pink-text-gradient",
        },
      ],
      image: assembler,
      source_code_link: "https://github.com/adimehta9/MIPS-Assembler/",
    },
  ];
  
  export { languages, tools, frameworks, experiences, projects, categories };
  