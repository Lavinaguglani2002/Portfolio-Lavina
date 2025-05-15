import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './About.css'; 
import about from './about.jpg'; 
import Footer from '../Home/Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
      <div className="profile-pic-container">
            <img className="about" src="" alt="about" />
          </div>
<br/>
        <div className="about-heading-container">
          <h3 className="about-heading">Know Who I'M</h3>
<h2 style={{"color":'black',"fontSize":"30x"}}>Hi. I'm Lavina, nice to meet<br/> you. Please take a look around.

</h2>.
        </div>
        <div className="about-content">
          <div className="text-container">
            <p style={{"color":"black"}}>
              I am a Final-Year Computer Science and Engineering Student from Giani Zail Singh Campus College of Engineering and Technology, Maharaja Ranjit Singh Punjab Technical University, Bathinda<strong style={{"color":'lightblue'}}>(2k21-2k25)</strong>.
            </p>
            <p>
              I am passionate about exploring different web technologies and enhancing my skills by building projects. 
            </p>

<p>I have worked as <strong style={{"color":"black"}}>Web Development intern at Potencia Academy for 2 months</strong>(from April 2023-July 2023) and learnt a lot of practical knowledge about the tech industry.</p>
<p>I have completed a <strong style={{"color":"black"}}>MERN</strong> stack training at <strong style={{"color":"black"}}>Think Next Private Limited </strong>from July 2023 to August 2023, where I strengthened my knowledge of full-stack development.

</p>
<p>I also did a one-month internship at <strong style={{"color":"black"}}>Bharat Intern</strong> from December 2023 to January 2024, which helped me refine my skills further.

</p>

            <p>I have recently worked as Information Technology Intern at <strong style={{"color":"black"}}>Trident Group India,Ludhiana </strong>where I gained valuable experience and exploring different skills such as Power Apps,SharePoint.</p>
           <p>Now I am interning at  <strong style={{"color":"black"}}>VerveBridge </strong> in remote mode where I have worked on varioud Projects.</p>
            <p>I have completed my industrial training at  <strong style={{"color":"black"}}>Softwizz Private Limited</strong> in Mern Stack Developer Trainee, where I am working on projects that enhance my technical expertise.

</p>
            <p>My main Aim is to become a Successful Web Developer.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Aboutus;
