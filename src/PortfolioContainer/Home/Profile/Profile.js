import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [text, setText] = useState('');
  const texts = [
    "MERN Stack Developer",
    "Enthusiastic dev",
    "Full Stack Developer",
    "PHP Developer"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[index].substring(0, text.length + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [text, index, texts]);

  useEffect(() => {
    if (text === texts[index]) {
      setTimeout(() => {
        setIndex((index + 1) % texts.length);
      }, 1000);
    }
  }, [text, index, texts]);

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="social-icons">
          <a href="https://github.com/Lavinaguglani2002"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/lavina-guglani-bb8750239"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@Lavina19"><i className="fab fa-youtube-square"></i></a>
          <a href="https://twitter.com/GuglaniLavina"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="profile-text">
          <h1 style={{ "color": "yellow", "fontSize": "50px", "fontFamily": "inherit" }}>Hello, I'm
             <span className="highlighted-text">Lavina</span> <span role="img" aria-label="wave">👋</span></h1>
          <h2 style={{ color: "white" }}>{text}</h2>
          <p style={{ "color": "white", "fontSize": "20px", "fontFamily": "serif" }}>Knack of building applications with frontend and backend operations</p>
          <p style={{ "color": "white", "fontSize": "20px" }}>
            A web developer is a skilled professional responsible for designing, building,
            and maintaining websites<br /> and web applications.
            They possess expertise in various
            programming languages and frameworks,<br /> including HTML, CSS, JavaScript, and popular
            libraries like React and Angular.
          </p>
          <div className="profile-options">
<a href="/Lavina__Guglani14__Resume .pdf" download="Lavina__Guglani14__Resume .pdf">
  <button style={{ width: "150px" }} className="btn highlighted-btn">
    Get Resume
  </button>
</a>

          </div>
        </div>

        <div className='profile-details-role'>

        </div>
      </div>
      <div className="profile-picture">
        {/* Your profile picture */}
      </div>
    </div>
  );
}

export default Profile;
