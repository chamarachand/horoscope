import React from 'react'
import './Footer.css'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="questions">
            <h2>Got questions?Get in touch</h2>
            <p>We're here to help you.</p>
            </div>

          <div className="socialMedia">
            <h2>Let's be social - connect with us! </h2>
            <div className='icons'>
            <FaFacebook className='icon-facebook' onClick={() => window.open("https://www.facebook.com/")} />
            <FaTwitter className='icon-twitter' onClick={() => window.open("https://twitter.com/")}/>
            <FaInstagram className='icon-instagram' onClick={() => window.open("https://www.instagram.com/")} />
            </div>
            </div>

            <div className='contactInformation'>
                <h2>Contact Information</h2>
                <p>Phone: 123-456-7890<br></br>
                   Email: info@mar.com<br></br>
                   Address: 1234 Ocean Ave. Wavy, CA 12345<br></br>
                MAR ©2021
                    
</p>
            </div>
         
       
      </section>
         
    </div>
  )
}

export default Footer
