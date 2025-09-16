import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/eu.jpeg';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Summary />
        <Skills />
        <Projects />
        <Experience />
      </div>
      <Footer />
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src={profilePhoto}
          alt="Carla Ezaki"
          className="profile-img"
        />
        <h1>Carla Ezaki</h1>
        <p className="title">Machine Learning & AI Engineer | Data Products Manager</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/carlaezaki/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:carla.ezaki@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:5547988800202">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Carla Ezaki. All rights reserved.</p>
    </footer>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Luiza Labs',
      role: 'Data Product Manager',
      duration: 'Jul 2022 - Present',
      description: 'Leadership in data product strategy for engineering, data science, governance, and visualization, focusing on building platforms that support the data lifecycle and ML models.'
    },
    {
      company: 'PicPay',
      role: 'Data Product Manager',
      duration: 'Jul 2021 - Jul 2022',
      description: 'Responsible for orchestrating value delivery in the area of real-time and batch data persistence. Worked on prioritizing and managing the data platform (Big Data and Stream) that feeds the AI models and business analytics base.'
    },
    {
      company: 'TOTVS',
      role: 'Technical Product Owner',
      duration: '2 years 7 months',
      description: 'Interface between technical teams and business areas, defining product roadmap and metrics. Participated in the evolution of Identity and Access Management products, working with the technical team for refactoring and performance improvement.'
    },
    {
      company: 'Thomson Reuters',
      role: 'Java Development Senior Analyst',
      duration: '3 years 5 months',
      description: 'Backend software development in Java with focus on APIs and Integrations (SOA and Rest) for tax systems in Brazil.'
    },
  ];

  return (
    <section className="section experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.company} - {exp.role}</h3>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Machine Learning Projects</h2>
      <div className="project-card">
        <h3>Master's in Applied Computing</h3>
        <p className="project-subtitle">UDESC</p>
        <p><strong>Thesis:</strong> Support for autism diagnosis through processing of retinal images.</p>
        <p><strong>Description:</strong> Developed an image processing system and Machine Learning models to analyze patterns in retinal images, with the objective of assisting in autism diagnosis. This project demonstrated my ability to apply computer vision algorithms to a complex health problem.</p>
        <div className="tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Image Processing</span>
          <span className="tech-tag">ML/DL Models</span>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = {
    languages: ['Python', 'SQL', 'Java'],
    ml_dl: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    cloud_data: ['AWS', 'GCP', 'Spark', 'Hadoop'],
    tools: ['Git', 'Docker', 'Kubernetes']
  };

  return (
    <section className="section skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-list">
            {skills.languages.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>ML/DL Frameworks & Libraries</h3>
          <div className="skill-list">
            {skills.ml_dl.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>Cloud & Big Data</h3>
          <div className="skill-list">
            {skills.cloud_data.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-list">
            {skills.tools.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="section summary">
      <h2>Professional Summary</h2>
      <p>Machine Learning and AI Engineer with extensive experience in product management and technical leadership. I have solid knowledge in data engineering, computer vision, and ML model deployment. Proven ability to interface between technical teams and business areas, translating complex needs into data-driven solutions.</p>
    </section>
  );
};

export default App;