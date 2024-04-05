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
    carrent,
    jobit,
    tripguide,
    chsarp,

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
  

  
  const projects = [
    {
      name: "Car Rent",
      category: 'AI/ML',
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      category: 'AI/ML',
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      category: "Frontend",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { languages, tools, frameworks, experiences, projects };
  