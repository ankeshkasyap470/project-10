import { useEffect, useState, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Weather API Application',
      description: 'A dynamic weather application that fetches real-time weather data using API integration. Features include current weather conditions, forecasts, and location-based search.',
      technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
      link: 'https://github.com/ankeshkasyap470',
      icon: '🌤️'
    },
    {
      title: 'Age Calculator',
      description: 'An interactive age calculator that computes exact age in years, months, and days. Includes validation for date inputs and provides detailed age breakdown.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/ankeshkasyap470',
      icon: '📅'
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>My Projects</h2>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-icon-wrapper">
                <span className="project-icon">{project.icon}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
