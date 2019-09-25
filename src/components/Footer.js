import React from 'react';

class Footer extends React.Component {
  state = {
    linkedin: "https://www.linkedin.com/in/catherine-batsoula-3983a218a/",
    github: "https://github.com/cbatsoula",
    gmail: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=+cbatsoula@gmail.com",
  }
  handleLinks = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === "Linkedin") {
      return window.location = this.state.linkedin}
    else if (event.target.innerText === "Github") {
      return window.location = this.state.github
    } else if (event.target.innerText === "Gmail") {
      return window.location = this.state.gmail
    }

  }
  render () {
    return (
      <div className="Footer">
        <button onClick={(event) => {this.handleLinks(event)}}>Linkedin</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Gmail</button>
        <button onClick={(event) => {this.handleLinks(event)}}>Github</button>
      </div>
    );
  }
}

export default Footer;
