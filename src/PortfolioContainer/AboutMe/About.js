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
          </div>
<br/>
        <div className="about-heading-container">
          <h3 className="about-heading"style={{"color":"white"}}>Know Who I'M</h3>
<h2 style={{"color":'white',"fontSize":"25x"}}>Hi. I'm Lavina, nice to meet<br/> you. Please take a look around.

</h2>.
        </div>
        <div className="about-content">
          <div className="text-container">
            <p style={{"color":"skyblue"}}>I’m currently working as a Lecturer at Giani Zail Singh Campus College of Engineering and Technology, where I joined in August 2025 and deliver lectures in the Computer Science and Engineering department.
            </p>
            <p style={{"color":"white"}}>
I have completed my B.Tech in Computer Science and Engineering from Giani Zail Singh Campus College of Engineering and Technology (MRSPTU), Bathinda (2k21–2k25).
            </p>
            <p>
              I am passionate about exploring different web technologies and enhancing my skills by building projects. 
            </p>

<p>I have worked as <strong style={{"color":"skyblue"}}>Web Development intern at Potencia Academy for 2 months</strong>(from April 2023-July 2023) and learnt a lot of practical knowledge about the tech industry.</p>
<p>I have completed a <strong style={{"color":"skyblue"}}>MERN</strong> stack training at <strong style={{"color":"skyblue"}}>Think Next Private Limited </strong>from July 2023 to August 2023, where I strengthened my knowledge of full-stack development.

</p>
<p>I also did a one-month internship at <strong style={{"color":"skyblue"}}>Bharat Intern</strong> from December 2023 to January 2024, which helped me refine my skills further.

</p>

            <p>I have recently worked as Information Technology Intern at <strong style={{"color":"skyblue"}}>Trident Group India,Ludhiana </strong>where I gained valuable experience and exploring different skills such as Power Apps,SharePoint.</p>
           <p>Now I am interning at  <strong style={{"color":"skyblue"}}>VerveBridge </strong> in remote mode where I have worked on varioud Projects.</p>
            <p>I have completed my industrial internship at  <strong style={{"color":"skyblue"}}>PG Tech Solutions </strong> in Mern Stack Developer Trainee, where I am working on projects that enhance my technical expertise.

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
