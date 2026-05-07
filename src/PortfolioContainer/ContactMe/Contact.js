import React from 'react';
import './contact.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      
      <div className="contact-wrapper">
        <div className="contact-card">
          <h1>Get In Touch</h1>
          
          <div className="email-info">
            <i className="fa fa-envelope"></i>
            <span>Lavinaguglani456@gmail.com</span>
          </div>

          <form 
            className="contact-form"
            action="https://formsubmit.co/lavinaguglani456@gmail.com" 
            method="POST"
          >
            {/* FormSubmit Configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://yourportfolio.com/thanks" /> {/* Optional: Success page */}

            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="How can I help you?" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;