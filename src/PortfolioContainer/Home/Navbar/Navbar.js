import React, { useState } from 'react';
import LOGOO from "./LOGOO.png";
import './Navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-darkblue">
        <div className="container-fluid">
          <img src={LOGOO} style={{"width":"100px","height":"80px","background":"none","backgroundColor":"none","textDecoration":"none"}} alt="logo"/>
         
          <button style={{"color":"white !important","height":"90px","width":"100px",}} className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span style={{"color":"white !important","fontSize":"30px"}} className="navbar-toggler-icon"></span>
          </button>
          <div style={{"color":'white!important',"background":'none'}} className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}>
            <ul style={{"color":"white"}} className="navbar-nav">
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "30px", "marginRight": "20px" }} className="nav-link" aria-current="page" href="/"><i className="fa fa-home"></i> Home</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "30px", "marginRight": "20px" }} className="nav-link" href="/about"><i className="fa fa-info"></i> About</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "30px", "marginRight": "20px" }} className="nav-link" href="/skills"><i className="fa fa-user"></i> Skills</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "30px", "marginRight": "20px" }} className="nav-link" href="/project"><i class="fas fa-project-diagram"></i> Project</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "30px", "marginRight": "20px" }}
                 className="nav-link" href="/contact"><i className="fa fa-user"></i> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
