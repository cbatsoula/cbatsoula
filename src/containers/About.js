import React from 'react';
import AboutImages from "./MVIMG_20191028_120144.jpg"

class About extends React.Component {


  render () {

    return (
      <>
      <div className="AboutBanner">
      <h3>A little about myself</h3>
      </div>
        <div className="About">

          <img className="About-images" src={AboutImages} alt="smiling selfie" />
          <div className="About-cont">
          Full Stack Web Developer with 4 years experience in the service industry with a passion for designing projects and coding. I bring strong skills in team-building and project management to help drive the project to completion. I discovered coding through meeting new people who encouraged me to take the leap into programming. I am excited to build and maintain web applications that will be used by everyday people navigating through the uncertain waters of life.
          </div>
        </div>
        <div className="Skills">
        <p>Ruby on Rails | Javascript | React.js | Redux | CSS | HTML | Semantic UI | Github | Adobe Photoshop</p>
        </div>
      </>
    );
  }
}

export default About;
