import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container-about">
      <div className="title-about">
        <h1>About Us</h1>
        
      </div>
      <div className="content-about">
      <div className="article-about">
        <h2>Lorem ipsum dolor, .</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Enim reprehenderit similique consectetur consequuntur quae
           deserunt exercitationem quas natus. Nisi assumenda quidem porro 
           nam officia animi earum dignissimos quasi nemo et!
        </p>
        <a href='/#'>Read More</a>
      </div>
      <div className="image-section-about">
       <img src="RashiChakraya.png" alt="image-about" className="image-about"/>
       
      </div>
    </div>
    </div> 
  );
};

export default AboutUs;
