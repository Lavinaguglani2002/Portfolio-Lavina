import React from 'react';
import './Footer.css'; // Separate CSS file for clean management

function Footer() {
  // Automatically gets the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        {/* Left Side: Dynamic Copyright Text */}
        <div className="footer-copyright">
          <p>
            Copyright &copy; {currentYear} by <span>Lavina Guglani</span>. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Quick Cyber Social Links */}
        <div className="footer-socials">
          <a href="mailto:lavinaguglani456@gmail.com" title="Email">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://github.com/Lavinaguglani2002" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/lavina-guglani-bb8750239" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;