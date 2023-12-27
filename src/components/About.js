import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt="About Me" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Student!</h4>
        <p>As a 2nd year student at Indira Gandhi Delhi Technical University for Women (IGDTUW) pursuing a B.Tech in Electrical and Communication Engineering, I am embarking on a journey of exploration, growth, and opportunities. My academic pursuit in this specialized field showcases my passion for engineering and my dedication to understanding the intricacies of mechanical systems and automation technologies.</p>
        <a href="#" className="btn">More About</a>
      </div>
    </section>
  );
}

export default About;