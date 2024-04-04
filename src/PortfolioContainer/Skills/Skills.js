import React from 'react';
import './Skills.css'
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
export const Skills = () => {
  return (
    <div>
            <Navbar/>
            <h2 style={{'color':'white'}}>Here are my technical skills. These are the skills I have learned.




</h2>

    <div className="card-container">

      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">HTML</h5>
          <a href="https://www.w3schools.com/html/html_intro.asp" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">CSS</h5>
          <a href="https://www.tutorialspoint.com/css/what_is_css.htm" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://play-lh.googleusercontent.com/s4AnA0RrLKhVMKDBSBTjNvPBBK2wQk3-4ZP2RONGxK_VqnMNXWTmPy-6f8J64GxDgyU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JavaScript</h5>
          <a href="https://www.w3schools.com/js/" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBmjFGJyjhQ3b9orL3YV4zP48AAEA3kXr99luOZnrmyg&s" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">React.js</h5>
          <a href="https://www.javatpoint.com/react-introduction" className="btn btn-primary">Read It</a>
        </div>
      </div>
    </div>
    <div className='card-container'>
    <div className="card" style={{ "width": "15rem" }}>
        <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Node.js</h5>
          <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uAeMbHzLL7uDUN2eGl6SOdjk0hrQgXjyiL40JCQpFQ&s" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Redux</h5>
          <a href="https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://w7.pngwing.com/pngs/54/423/png-transparent-white-and-yellow-logo-square-area-text-symbol-yellow-xampp-text-rectangle-orange-thumbnail.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Xampp</h5>
          <a href="https://www.javatpoint.com/xampp" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://p7.hiclipart.com/preview/929/60/54/net-framework-c-net-core-software-framework-mono-studio-thumbnail.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">C#</h5>
          <a href="https://www.w3schools.com/cpp/cpp_intro.asp" className="btn btn-primary">Read It</a>
        </div>
      </div>

      </div>
      <div className='card-container'>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Mongodb</h5>
          <a href="https://www.mongodb.com" className="btn btn-primary">Read It</a>
        </div>
      </div>

      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title ">My Sql</h5>
          <a href="https://www.w3schools.com/mysql/mysql_intro.asp" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Github</h5>
          <a href="https://github.com/" className="btn btn-primary">Read It</a>
        </div>
      </div>
      <div className="card" style={{ "width": "15rem" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bootstrap</h5>
          <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" className="btn btn-primary">Read It</a>
        </div>
      </div>


      </div>
      <Footer/>
    </div>
  );
};
