import { useEffect, useState, useRef } from 'react';
import './Skills.css';

function Skills() {
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

  const skills = [
    { name: 'HTML', level: 90, icon: '🌐', color: '#E34F26' },
    { name: 'CSS', level: 85, icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', level: 88, icon: '⚡', color: '#F7DF1E' },
    { name: 'React', level: 85, icon: '⚛️', color: '#61DAFB' },
    { name: 'Java', level: 80, icon: '☕', color: '#007396' },
    { name: 'English', level: 85, icon: '🗣️', color: '#2ecc71' }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Technical Skills</h2>
        <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color
                  }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
