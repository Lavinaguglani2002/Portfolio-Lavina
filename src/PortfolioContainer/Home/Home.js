import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
