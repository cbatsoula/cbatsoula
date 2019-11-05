import React from 'react';
import { Link } from  'react-router-dom';

class Nav extends React.Component {
  buttonClick = () => {
    window.location = "https://docs.google.com/document/d/13KVNctcoed3cMKObeBR9RpxQ6wrMjUL__XAgdP-M7KE/edit?usp=sharing"
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
