import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs, FaReact, FaPython, FaCss3Alt, FaUnity } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import '../App.css'
import './skills.css'
import './about.css'
import './contact.css'

export default function Main() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadPdf = () => {
    window.open('assets/Resume.pdf', '_blank')
  }

  return (
    <div className='background'>
      <div className='container'>

        <div className='intro'>
          <div className='intro-name'>
            <h1>Brian Rogers</h1>
            <p>FullStack Developer</p>
          </div>
          <div className='links'>
            <p onClick={() => scrollToSection('skills')}>Skills</p>
            <p onClick={() => scrollToSection('projects')}>Projects</p>
            <p onClick={() => scrollToSection('about')}>About</p>
            <p onClick={() => scrollToSection('contact')}>Contact</p>
          </div>
        </div>






        <div className='skills' id='skills'>
          <h1 className='title'>Skills</h1>
          <div className='skills-info'>
            <div className='list-skills'>
                <ul className='scroll-skills'>
                    <li className="skill-item">JavaScript<span className='tech-icon'><RiJavascriptLine /></span></li>
                    <li className="skill-item">NodeJs<span className='tech-icon'><FaNodeJs /></span></li>
                    <li className="skill-item">React<span className='tech-icon'><FaReact /></span></li>
                    <li className="skill-item">SQL<span className='tech-icon'><SiPostgresql /></span></li>
                    <li className="skill-item">MongoDB<span className='tech-icon'><SiMongodb /></span></li>
                    <li className="skill-item">Python<span className='tech-icon'><FaPython /></span></li>
                    <li className="skill-item">Ruby<span className='tech-icon'><DiRuby /></span></li>
                    <li className="skill-item">CSS3<span className='tech-icon'><FaCss3Alt /></span></li>
                    <li className="skill-item">HTML<span className='tech-icon'><AiOutlineHtml5 /></span></li>
                    <li className="skill-item">Unity<span className='tech-icon'><FaUnity /></span></li>
                </ul>
            </div>
            <div className='resume'>
                <div className='resume-button'>
                    <h2>More Info Here!</h2>
                    <img className='arrow' src="/assets/DownArrow1.png" alt="arrow" />
                    <button onClick={downloadPdf} className='button'>Download Resume</button>
                </div>
            </div>
          </div>
        </div>






        <div className='projects' id='projects'>
          <h1 className='title'>Projects</h1>
          <div className='projects-info'>
            <Link to="/project1" className='project'>
              <h1>Cave Explorer</h1>
              <p>A retro throw back to old desktop games! Built with HTML Canvas and good old JavaScript</p>
              <div class="project-background" id="project1-background"></div>
            </Link>
            <Link to="/project2" className='project'>
              <h1>Equestion Organizer</h1>
              <p>A Horse Managment System for equestrians to help keep track with their tasks and animals.</p>
              <div class="project-background1" id="project2-background"></div>
            </Link>
            <Link to="/project3" className='project'>
              <h1>Joystick Junkies</h1>
              <p>A fun social network for people to share interest and thoughts! A nostalgic feeling for all game lovers</p>
              <div class="project-background2" id="project3-background"></div>
            </Link>
            <Link to="/project4" className='project'>
              <h1>SimuStock</h1>
              <p>Want to play the stocks without loosing your money? Here is your chance in this real world simulation!</p>
              <div class="project-background3" id="project4-background"></div>
            </Link>
          </div>
        </div>






        <div className='about' id='about'>
          <h1 className='title'>About</h1>
          <div className='about-info'>
            <img src="./assets/Profile-Pic.jpg" alt="profilepic" />
            <p>Hello! I'm a Full-Stack Developer with a passion for crafting seamless digital experiences from the ground up. My journey in tech is driven by a robust foundation in React and JavaScript, where I excel not just in coding but in bringing creative solutions to complex problems.
                In an industry that evolves by the second, I pride myself on being the hardest worker in the room. My dedication to my craft goes beyond writing code; it's about understanding the pulse of innovation and anticipating the needs of tomorrow. This commitment has shaped me into not only an engineer but a visionary, constantly exploring the intersection of technology and user experience.
                What truly sets me apart is my ability to learn quickly. In the fast-paced world of software development, I adapt, assimilate new technologies, and pivot strategies with unparalleled speed, ensuring that my projects are not just relevant but ahead of their time.
                Creativity is at the core of everything I do. Whether it's architecting scalable web applications or designing intuitive UI/UX, I believe in thinking outside the box and pushing the boundaries of what's possible with code. My approach is holistic, ensuring that every line of code not only meets the functional requirements but also tells a story and engages the user.
                As a Full-Stack Developer, my expertise spans the entire software development lifecycle, from conceptualization to deployment, and everything in between. My strength in React and JavaScript, combined with my creative mindset, work ethic, and quick learning abilities, enable me to deliver exceptional digital products that stand out in the digital landscape.
                I'm excited to bring my blend of skills, passion, and dedication to your next project, creating software solutions that are not just efficient and robust but also innovative and user-centric. Let's build something amazing together.</p>
          </div>
        </div>







        <div className="contact" id="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-info">
                <form id="contact-form" className="form" method="POST" action="https://formspree.io/f/xrgnqjrk">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required rows="4"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="social-icons">
        <a href="https://www.linkedin.com/in/brian-rogers-2023ga/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/brogers-97" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
        </a>
    </div>
        </div>


      </div>
    </div>
  );
}