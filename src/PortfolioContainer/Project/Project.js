import React from 'react';
import money from "./money.jpg";
import registerform from "./registerform.jpg";
import Navbar from '../Home/Navbar/Navbar';
import grocery from "./grocery.jpg"
import yatra from "./yatra.jpg"
import health from './health.jpg'
import Footer from '../Home/Footer/Footer';
import ecommerce from "./ecommerce.png"
import restaurant from "./restaurant.png"

const Project = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
            <div className="card">
              <img src={restaurant} className="card-img-top" alt="Money Tracker App" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Restaurant Website using Mern Stack</h5>
                <a href="https://github.com/Lavinaguglani2002/Hotel.git" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>


        <div className="col">
            <div className="card">
              <img src={money} className="card-img-top" alt="Money Tracker App" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Money Tracker App using Mern Stack</h5>
                <a href="https://github.com/Lavinaguglani2002/Money-tracker-app" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>

        <div className="col">
            <div className="card">
              <img src={health} className="card-img-top" alt="Healthcare Website" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Healthcare Website Using PHP</h5>
                <a href="https://github.com/Lavinaguglani2002/HEALTHCARE-WEBSITE.git" className="btn btn-primary"style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={yatra} className="card-img-top" alt="Punjab Nai Soch Yatra" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Punjab Nai Soch Yatra using React.js</h5>
                <a href="https://github.com/Lavinaguglani2002/punjab-yatra.git" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>


        <div className="col">
            <div className="card">
              <img src={grocery} className="card-img-top" alt="Grocery Website" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Grocery Website using HTML,CSS,JS</h5>
                <a href="https://github.com/Lavinaguglani2002/market.git" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>
   
          <div className="col">
            <div className="card">
              <img src={registerform} className="card-img-top" alt="Register Form" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Registration Form using Mern Stack</h5>
                <a href="https://github.com/Lavinaguglani2002/Register-mern-stack-form" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ecommerce} className="card-img-top" alt="Register Form" style={{height: "230px"}} />
              <div className="card-body">
                <h5 className="card-title">Description: Ecommerce Website using Mern Stack</h5>
                <a href="https://github.com/Lavinaguglani2002/Watch-Ecommerce-Website.git" className="btn btn-primary" style={{"width":"120px"}}>View Code</a>
              </div>
            </div>
</div>
               </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Project;
