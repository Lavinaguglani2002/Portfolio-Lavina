import React from 'react';
import './contact.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='form'>
        <div className='contact-icons'>
<h3 style={{"color":"white"}}>Contact me at Lavinaguglani456@gmail.com</h3>
            <i style={{  "color": "#D93025" ,"width":"40px","height":"40px"}}className='fa fa-envelope email-icon'></i>
        </div>
        <h1 style={{ "color": 'white' }}> Direct Contact </h1>
        <form action="https://formsubmit.co/lavinaguglani456@gmail.com" method="POST">
          <input type="text" name="name" placeholder='Name' />
          <input type="email" name="email" placeholder='Email' />
          <input type='text' name="subject" placeholder='Subject' />
          <textarea name="message" placeholder='Message'></textarea>
          <input type='hidden' name="_captcha" value="false" />
          <input type='hidden' name='_template' value="table" />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default Contact;
