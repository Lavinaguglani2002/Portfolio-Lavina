// import React from 'react';
// import Navbar from '../Home/Navbar/Navbar';
// import './About.css'; 
// import about from './about.jpg'; 
// import Footer from '../Home/Footer/Footer';

// const Aboutus = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="about-container">
//       <div className="profile-pic-container">
//           </div>
// <br/>
//         <div className="about-heading-container">
//           <h3 className="about-heading"style={{"color":"white"}}>Know Who I'M</h3>
// <h2 style={{"color":'white',"fontSize":"25x"}}>Hi. I'm Lavina, nice to meet<br/> you. Please take a look around.

// </h2>.
//         </div>
//         <div className="about-content">
//           <div className="text-container">
//             <p style={{"color":"skyblue"}}>I’m currently working as a Lecturer at Giani Zail Singh Campus College of Engineering and Technology, where I joined in August 2025 and deliver lectures in the Computer Science and Engineering department.
//             </p>
//             <p style={{"color":"skyblue"}}>
// Currently, I am also doing an internship at <strong>Amdox Technologies</strong>, where I am gaining hands-on experience and enhancing my practical skills in the tech industry.
// </p>
//             <p style={{"color":"white"}}>
// I have completed my B.Tech in Computer Science and Engineering from Giani Zail Singh Campus College of Engineering and Technology (MRSPTU), Bathinda (2k21–2k25).
//             </p>
//             <p>
//               I am passionate about exploring different web technologies and enhancing my skills by building projects. 
//             </p>

// <p>I have worked as <strong style={{"color":"skyblue"}}>Web Development intern at Potencia Academy for 2 months</strong>(from April 2023-July 2023) and learnt a lot of practical knowledge about the tech industry.</p>
// <p>I have completed a <strong style={{"color":"skyblue"}}>MERN</strong> stack training at <strong style={{"color":"skyblue"}}>Think Next Private Limited </strong>from July 2023 to August 2023, where I strengthened my knowledge of full-stack development.

// </p>
// <p>I also did a one-month internship at <strong style={{"color":"skyblue"}}>Bharat Intern</strong> from December 2023 to January 2024, which helped me refine my skills further.

// </p>

//             <p>I have recently worked as Information Technology Intern at <strong style={{"color":"skyblue"}}>Trident Group India,Ludhiana </strong>where I gained valuable experience and exploring different skills such as Power Apps,SharePoint.</p>
//            <p>Now I am interning at  <strong style={{"color":"skyblue"}}>VerveBridge </strong> in remote mode where I have worked on varioud Projects.</p>
//             <p>I have completed my industrial internship at  <strong style={{"color":"skyblue"}}>PG Tech Solutions </strong> in Mern Stack Developer Trainee, where I am working on projects that enhance my technical expertise.

// </p>
//             <p>My main Aim is to become a Successful Web Developer.</p>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
    
//   );
// }

// export default Aboutus;

import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './About.css'; 
import aboutPic from './about.jpg'; 
import Footer from '../Home/Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        
        <div className="about-header">
          <h3>Know Who I Am</h3>
          <h2>Hi, I'm <span className="highlight-blue">Lavina</span>. Nice to meet you!</h2>
        </div>

        <div className="about-grid">
          <div className="image-box">
            <img src={aboutPic} alt="About Lavina" />
          </div>

          <div className="text-box">
            <p>
              I am a passionate <span className="highlight-blue">Full Stack Developer</span> and an academician. 
              Currently, I am serving as a <span className="highlight-blue">Lecturer</span> at <strong>Giani Zail Singh Campus College of Engineering and Technology</strong> (joined August 2025).
            </p>
            <p>
              I graduated with a <span className="highlight-blue">B.Tech in CSE</span> (2021–2025) and have consistently 
              balanced my academic roles with professional industry experience.
            </p>
            <p>
              My journey is driven by a deep curiosity for web technologies. I love building responsive 
              and scalable applications, and I am always looking for new ways to refine my craft in the 
              ever-evolving tech world.
            </p>
            <div className="quote">
              <strong style={{color: "#ffcc00"}}>"My main aim is to become a world-class Web Developer."</strong>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="experience-section">
          <h3 style={{textAlign: 'center', marginBottom: '30px', color: '#ffcc00'}}>Professional Journey</h3>
          
          <div className="exp-grid">
            <div className="exp-card">
              <h4>Amdox Technologies</h4>
              <span>Present Intern</span>
              <p>Gaining hands-on experience and enhancing practical skills in the tech industry.</p>
            </div>

            <div className="exp-card">
              <h4>Trident Group India</h4>
              <span>IT Intern (Ludhiana)</span>
              <p>Explored SharePoint and Power Apps while handling industrial IT operations.</p>
            </div>

            <div className="exp-card">
              <h4>Think Next Pvt Ltd</h4>
              <span>MERN Stack Training</span>
              <p>Intensive training in Full-Stack development to build robust web applications.</p>
            </div>

            <div className="exp-card">
              <h4>Bharat Intern & VerveBridge</h4>
              <span>Web Development Intern</span>
              <p>Worked on various remote projects, refining frontend and backend expertise.</p>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Aboutus;