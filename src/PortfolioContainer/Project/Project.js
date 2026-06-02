
import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import "./Project.css";

// Images
import money from "./money.jpg";
import health from './health.jpg';
import ecommerce from "./ecommerce.png";
import restaurant from "./restaurant.png";
import Handihud from "./Handihud.png";
import Smarthiree from "./Smarthiree.png";
import Certificate from "./Certificate.png";

const projectsData = [
  {
    title: "Certificate Verification System",
    img: Certificate,
    code: "https://github.com/Lavinaguglani2002/Certificate-Verification-System-Mern.git",
    live: "https://certificate-verification-system-mer.vercel.app"
  },
  {
    title: "Klavya Smart Serve",
    img: Handihud,
    code: "https://github.com/Lavinaguglani2002/Klavya-smart-serve.git",
    live: "https://klavya-smart-serve.vercel.app"
  },
  {
    title: "Smart Hire - Job Platform",
    img: Smarthiree,
    code: "https://github.com/Lavinaguglani2002/SmartHire-Jobseekingplatform.git",
    live: "https://smart-hire-jobseekingplatform.vercel.app"
  },
  {
    title: "Hostel Management System",
    img: restaurant,
    code: "https://github.com/Lavinaguglani2002/Hostel-management-1.git",
    live: null
  },
  {
    title: "Money Tracker (MERN Stack)",
    img: money,
    code: "https://github.com/Lavinaguglani2002/Money-tracker-app.git",
    live: null
  },
  {
    title: "Healthcare Website (PHP)",
    img: health,
    code: "https://github.com/Lavinaguglani2002/HEALTHCARE-WEBSITE.git",
    live: null
  },
  {
    title: "E-Commerce Watch Store",
    img: ecommerce,
    code: "https://github.com/Lavinaguglani2002/Ecom-watches.git",
    live: "https://ecom-watches.vercel.app"
  }
];

const Project = () => {
  return (
    <div className="project-page-bg">
      <Navbar />
      <div className="project-wrapper">
        <h2 className="project-title">My Recent Projects</h2>
        <p className="project-subtitle">Here is a showcase of my recent web development work.</p>
        
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            {projectsData.map((project, index) => (
              <div className="col" key={index}>
                <div className="card custom-card">
                  <div className="card-img-wrapper">
                    <img 
                      src={project.img} 
                      className="card-img-top custom-card-img" 
                      alt={project.title} 
                    />
                  </div>
                  <div className="card-body custom-card-body">
                    <h5 className="card-title custom-card-title">{project.title}</h5>
                    <div className="btn-group-custom">
                      <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-code">
                        Code
                      </a>
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-live">
                          Live Demo
                        </a>
                      ) : (
                        <span className="btn btn-disabled">Local Project</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;