import React, { useState } from 'react';
import lavu from "./lavu.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-darkblue">
        <div className="container-fluid">
          <img src={lavu} style={{"width":"100px","height":"100px"}}/>
          <button style={{"color":"white","height":"90px","width":"100px"}} className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span style={{"color":"black","backgroundColor":"white","textDecoration":"hidden"}} className="navbar-toggler-icon"></span>
          </button>
          <div style={{"color":'white'}} className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}>
            <ul style={{"color":"white"}} className="navbar-nav">
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "25px", "marginRight": "20px" }} className="nav-link" aria-current="page" href="/"><i className="fa fa-home"></i> Home</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "25px", "marginRight": "20px" }} className="nav-link" href="/about"><i className="fa fa-info"></i> About</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "25px", "marginRight": "20px" }} className="nav-link" href="/skills"><i className="fa fa-user"></i> Skills</a>
              </li>
             
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "25px", "marginRight": "20px" }} className="nav-link" href="/project"><i class="fas fa-project-diagram"></i>Project</a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a style={{ "color": "white", "fontSize": "25px", "marginRight": "20px" }} className="nav-link" href="/contact"><i className="fa fa-user"></i> Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
