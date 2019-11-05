import React from 'react';
import { Link } from  'react-router-dom';

class Nav extends React.Component {
  buttonClick = () => {
    window.location = "https://drive.google.com/file/d/0B4totDNwNoRuVGNwU25QNVJOS2c/view"
  }


 //look up react references and how to actually make them and use them --


  render () {

    return (
      <div className="Nav">
        <Link to="/projects"><button style={{textDecoration: 'none'}}>Projects</button></Link>
        <Link to="/about"><button style={{textDecoration: 'none'}}>About</button></Link>
        <Link to="/resume"><button style={{textDecoration: 'none'}} onClick={this.buttonClick}>Resume</button></Link>
      </div>
    );
  }
}

export default Nav;
