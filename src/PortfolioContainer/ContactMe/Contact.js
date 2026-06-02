// import React from 'react';
// import './contact.css';
// import Navbar from '../Home/Navbar/Navbar';
// import Footer from '../Home/Footer/Footer';

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
      
//       <div className="contact-wrapper">
//         <div className="contact-card">
//           <h1>Get In Touch</h1>
          
//           <div className="email-info">
//             <i className="fa fa-envelope"></i>
//             <span>Lavinaguglani456@gmail.com</span>
//           </div>

//           <form 
//             className="contact-form"
//             action="https://formsubmit.co/lavinaguglani456@gmail.com" 
//             method="POST"
//           >
//             {/* FormSubmit Configurations */}
//             <input type="hidden" name="_captcha" value="false" />
//             <input type="hidden" name="_template" value="table" />
//             <input type="hidden" name="_next" value="https://yourportfolio.com/thanks" /> {/* Optional: Success page */}

//             <input type="text" name="name" placeholder="Full Name" required />
//             <input type="email" name="email" placeholder="Email Address" required />
//             <input type="text" name="subject" placeholder="Subject" required />
//             <textarea name="message" placeholder="How can I help you?" required></textarea>
            
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import './contact.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Contact = () => {
  return (
    <div className="contact-page-bg">
      <Navbar />
      
      <div className="contact-wrapper">
        <div className="contact-card">
          <h1>Get In Touch</h1>
          <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello!</p>
          
          {/* Modern Social & Contact Badges */}
          <div className="contact-social-grid">
            <a href="mailto:lavinaguglani456@gmail.com" className="contact-badge-link">
              <div className="contact-badge">
                <i className="fa fa-envelope email-icon"></i>
                <div className="badge-text">
                  <small>Email Me</small>
                  <span>lavinaguglani456@gmail.com</span>
                </div>
              </div>
            </a>

            <a href="https://github.com/Lavinaguglani2002" target="_blank" rel="noreferrer" className="contact-badge-link">
              <div className="contact-badge">
                <i className="fab fa-github github-icon"></i>
                <div className="badge-text">
                  <small>GitHub</small>
                  <span>Lavinaguglani2002</span>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/lavina-guglani-bb8750239" target="_blank" rel="noreferrer" className="contact-badge-link">
              <div className="contact-badge">
                <i className="fab fa-linkedin linkedin-icon"></i>
                <div className="badge-text">
                  <small>LinkedIn</small>
                  <span>lavina-guglani</span>
                </div>
              </div>
            </a>
          </div>

          {/* Form Section */}
          <form 
            className="contact-form"
            action="https://formsubmit.co/lavinaguglani456@gmail.com" 
            method="POST"
          >
            {/* FormSubmit Configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
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