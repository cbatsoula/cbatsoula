import React from 'react';

class Footer extends React.Component {
  state = {
    linkedin: "https://www.linkedin.com/in/catherine-batsoula-3983a218a/",
    github: "https://github.com/cbatsoula",
    gmail: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=+cbatsoula@gmail.com",
    medium: "https://medium.com/@cbatsoula",
    flickr: "https://www.flickr.com/photos/134069298@N06/"
  }
  handleLinks = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === "Linkedin") {
      return window.location = this.state.linkedin}
    else if (event.target.innerText === "Github") {
      return window.location = this.state.github
    } else if (event.target.innerText === "Gmail") {
      return window.location = this.state.gmail
    } else if (event.target.innerText === "Medium") {
      return window.location = this.state.medium
    } else if (event.target.innerText === "Flickr") {
      return window.location = this.state.flickr
    }

  }
  render () {
    return (
      <div className="Footer">
        <button onClick={(event) => {this.handleLinks(event)}}>Linkedin</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Gmail</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Github</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Medium</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Flickr</button>
      </div>
    );
  }
}

export default Footer;
