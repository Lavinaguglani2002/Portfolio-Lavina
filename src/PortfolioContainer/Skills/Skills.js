import React from 'react';
import './Skills.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const skillsData = [
  { 
    name: "HTML", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
    link: "https://www.w3schools.com/html/" 
  },
  { 
    name: "CSS", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
    link: "https://www.w3schools.com/css/" 
  },
  { 
    name: "JavaScript", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
    link: "https://www.w3schools.com/js/" 
  },
  { 
    name: "React.js", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    link: "https://react.dev/" 
  },
  { 
    name: "Node.js", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
    link: "https://nodejs.org/" 
  },
  { 
    name: "Redux", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", 
    link: "https://redux.js.org/" 
  },
  { 
    name: "MongoDB", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
    link: "https://www.mongodb.com/" 
  },
  { 
    name: "MySQL", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
    link: "https://www.w3schools.com/mysql/" 
  },
  { 
    name: "GitHub", 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png", 
    link: "https://github.com/" 
  },
  { 
    name: "Bootstrap", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
    link: "https://getbootstrap.com/" 
  },
  { 
    name: "C#", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", 
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/" 
  },
  { 
    name: "Xampp", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg", 
    link: "https://www.apachefriends.org/" 
  }
];

export const Skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skills-wrapper">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">Proficiencies I have gained through my academic and professional journey.</p>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
              <h5>{skill.name}</h5>
              <a href={skill.link} target="_blank" rel="noreferrer" className="read-btn">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};