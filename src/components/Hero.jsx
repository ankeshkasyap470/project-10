import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Ankesh Kashyap</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Java Programmer</p>
            <p className="hero-description">
              Passionate about creating beautiful and functional web applications
              with modern technologies. Specializing in React, JavaScript, and Java development.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="image-wrapper">
              <div className="image-border"></div>
              <img src="/ankesh.png" alt="Ankesh Kashyap" className="hero-image" />
              <div className="floating-elements">
                <div className="float-element element-1"></div>
                <div className="float-element element-2"></div>
                <div className="float-element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
