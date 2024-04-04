import React from 'react'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import './Home.css'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Profile/>

<Footer/>
    </div>
  )
}

export default Home