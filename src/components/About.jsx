import { useEffect, useState, useRef } from 'react';
import './About.css';

function About() {
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

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>About Me</h2>
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate Full Stack Developer with expertise in modern web technologies
              and Java programming. I love building applications that solve real-world problems
              and provide excellent user experiences.
            </p>
            <p className="about-paragraph">
              With strong skills in React, JavaScript, and Java, I create responsive and
              efficient web applications. I'm also proficient in English communication,
              which helps me collaborate effectively with teams and clients.
            </p>
            <p className="about-paragraph">
              I'm constantly learning and staying updated with the latest technologies
              to deliver high-quality solutions. I believe in writing clean, maintainable
              code and following best practices in software development.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">💻</div>
              <h3>Web Development</h3>
              <p>Building modern, responsive web applications with React and JavaScript</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">☕</div>
              <h3>Java Programming</h3>
              <p>Developing robust backend solutions and applications</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🗣️</div>
              <h3>English Proficiency</h3>
              <p>Clear communication and effective collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
