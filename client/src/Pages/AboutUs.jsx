import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="container">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <div className="article">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni nobis porro maxime explicabo? Illum accusamus inventore, illo perspiciatis, beatae commodi enim consectetur corrupti recusandae nihil dolor deserunt consequuntur libero?</p>
          <a href='' className='button'>
            Read More
          </a>
        </div>
        <div className="image">
          <img src="RashiChakraya.png" alt="RashiChakraya" />
          </div>
      </div>

    </div>
       
      
   
  )
}

export default AboutUs
