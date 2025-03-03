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
    adhawk,
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
      title: "Software Engineer",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Developed a distributed caching layer, reducing API response times by 50%, leveraging Azure Redis Cache and gRPC.",
        "Implemented a scalable machine learning pipeline, accelerating model training by 3x, using PyTorch, TensorFlow, and Databricks.",
        "Built a high-availability microservices architecture, improving uptime to 99.99%, by deploying on Azure Kubernetes Service (AKS) with Istio.",
        "Integrated a real-time event-driven system, processing 1M+ events daily, using Apache Kafka and Azure Event Hubs.",
        "Refactored legacy monolithic applications into microservices, reducing deployment time from hours to minutes, with Docker, Kubernetes, and Azure DevOps.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Manulife",
      icon: manulife,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Designed an Infrastructure-as-Code (IaC) solution, reducing provisioning time by 70%, using Terraform and AWS CloudFormation.",
        "Implemented a Kubernetes-based deployment pipeline, cutting downtime by 50%, through Helm charts and Istio service mesh.",
        "Enhanced monitoring and alerting systems, decreasing mean-time-to-resolution (MTTR) by 40%, with Prometheus, Grafana, and ELK Stack.",
        "Developed automated security compliance checks, ensuring 100% adherence to company policies, by using AWS Config, Azure Security Center, and HashiCorp Vault.",
        "Optimized cloud cost allocation, reducing infrastructure expenses by 25%, by implementing AWS Cost Explorer, Spot Instances, and auto-scaling policies.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Manulife",
      icon: manulife,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Developed RESTful and GraphQL APIs, supporting 50,000+ daily transactions, using Spring Boot, Java, and PostgreSQL.",
        "Optimized microservices performance, reducing response time by 45%, through Redis caching, Kafka event streaming, and profiling tools like New Relic.",
        "Designed a secure authentication system, reducing fraud cases by 20%, by implementing OAuth 2.0, JWT, and SAML-based SSO.",
        "Led a database migration from legacy systems to cloud-native solutions, improving scalability and reducing costs by 30%, using AWS RDS and Kubernetes.",
        "Automated unit and integration testing pipelines, increasing test coverage from 60% to 95%, using JUnit, Mockito, and Cypress.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Titanium Agency",
      icon: titanium,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Developed a scalable web platform for digital marketing analytics, reducing report generation time by 50%, using React.js, Next.js, and Node.js.",
        "Designed a serverless data pipeline, automating ad performance tracking and reducing manual work by 80%, leveraging AWS Lambda, DynamoDB, and API Gateway.",
        "Optimized SQL queries and NoSQL indexing, improving database response time by 40%, using PostgreSQL and MongoDB.",
        "Implemented CI/CD pipelines with Docker and GitHub Actions, reducing deployment errors by 60% and ensuring fast rollouts.",
        "Enhanced site SEO and accessibility, boosting organic traffic by 35%, through Lighthouse audits, Web Vitals optimization, and best practices in modern front-end development.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Adhawk Microsystems",
      icon: adhawk,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Developed an embedded firmware solution for eye-tracking hardware, reducing system latency by 30%, by leveraging C++, Real-Time Operating Systems (RTOS), and ARM Cortex-M microcontrollers.",
        "Designed a high-performance data pipeline, increasing real-time processing speed by 40%, using Python, NumPy, and multi-threading techniques.",
        "Built a robust device calibration system, enhancing sensor accuracy by 25%, with computer vision algorithms in OpenCV and optimization techniques in TensorFlow.",
        "Integrated a cloud-based analytics dashboard, improving data visualization for customers, by deploying a React.js front-end with a Flask backend on AWS Lambda.",
        "Optimized system power consumption, extending battery life by 20%, through low-level hardware profiling and energy-efficient firmware design.,"
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
  