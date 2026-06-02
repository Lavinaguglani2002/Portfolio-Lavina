
// import React, { useState, useEffect } from "react";
// import "./Profile.css";

// const Profile = () => {
//   const texts = [
//     "MERN Stack Developer",
//     "Frontend Developer",
//     "Full Stack Developer",
//     "React Developer",
//   ];

//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     let charIndex = 0;
//     const currentText = texts[index];

//     const typingInterval = setInterval(() => {
//       if (charIndex < currentText.length) {
//         setText(currentText.substring(0, charIndex + 1));
//         charIndex++;
//       } else {
//         clearInterval(typingInterval);
//         setTimeout(() => {
//           setText("");
//           setIndex((prev) => (prev + 1) % texts.length);
//         }, 1500);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, [index, texts]);

//   return (
//     <div className="profile-container">
//       <div className="profile-parent">
        
//         {/* LEFT CONTENT */}
//         <div className="profile-details">
          
//           {/* Icons Section */}
//           <div className="social-icons">
//             <a href="https://github.com/Lavinaguglani2002" target="_blank" rel="noreferrer">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="https://linkedin.com/in/lavina-guglani-bb8750239" target="_blank" rel="noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://www.youtube.com/@Lavina19" target="_blank" rel="noreferrer">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="https://twitter.com/GuglaniLavina" target="_blank" rel="noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//           </div>

//           <div className="profile-text">
//             <h1 className="main-heading">
//               Hi, I'm <span className="highlighted-text">Lavina</span> 👋
//             </h1>

//             <h2 className="role-text">
//               {text}
//               <span className="cursor">|</span>
//             </h2>

//             <p className="short-desc">
//               Passionate MERN Stack Developer creating responsive, 
//               scalable and modern web applications with a knack for 
//               clean code and great user experiences.
//             </p>

//             <div className="profile-options">
//               <a href="/Lavinaguglani2002_final_resume.pdf" download>
//                 <button className="highlighted-btn">
//                   Download Resume
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT (Image) */}
//         <div className="profile-picture"></div>

//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import "./Profile.css";

const texts = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "React Developer",
];

const Profile = () => {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentText = texts[index];

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setText(currentText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);

  }, [index]);

  return (
    <div className="profile-container">
      <div className="profile-parent">

        <div className="profile-details">

          <div className="social-icons">
            <a href="https://github.com/Lavinaguglani2002" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://linkedin.com/in/lavina-guglani-bb8750239" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://www.youtube.com/@Lavina19" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://twitter.com/GuglaniLavina" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <div className="profile-text">
            <h1 className="main-heading">
              Hi, I'm <span className="highlighted-text">Lavina</span> 👋
            </h1>

            <h2 className="role-text">
              {text}
              <span className="cursor">|</span>
            </h2>

            <p className="short-desc">
              Passionate MERN Stack Developer creating responsive,
              scalable and modern web applications.
            </p>

            <div className="profile-options">
              <a href="/Lavinaaguglanii_final_resume.pdf" download>
                <button className="highlighted-btn">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="profile-picture"></div>

      </div>
    </div>
  );
};

export default Profile;