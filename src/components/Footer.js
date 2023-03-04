import "./footer.css";
import React from "react";
import { FaGit, FaGithub, FaHome, FaInstagram,  FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome className="ic" size="20" color="white"  />
            <div>
              <p>102C, Ramalakshmi Nagar</p>
              <p>Tirunelveli</p>
              <p>Tamil Nadu</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone className="ic" size="20" color="white"  />
            <div>
               <p>+91 7092841936</p> 
            </div>
            
          </div>
          <div className="email">
            <FaMailBulk className="ic" size='20' color='white' />
            <div>
                <p>kmaharajan30@gmail.com</p>
            </div>
            
          </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>This is Maharajan. Love to develop Front End Projects. </p>
            <div className="social">
                <FaLinkedin className="ic" size='30' color='white' />
                <FaInstagram className="ic" size='30' color='white'  />
                <FaGithub className="ic" size='30' color='white' />
            </div>
        </div>
      </div>
    </div>
  );
}
