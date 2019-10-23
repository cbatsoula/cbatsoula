import React from 'react';
import { Link } from  'react-router-dom';

class Nav extends React.Component {
  buttonClick = () => {
    console.log("lets seeee")
  }
  render () {

    return (
      <div className="Nav">
        <Link to="/projects"><button style={{textDecoration: 'none'}} onClick={this.buttonClick}>Projects</button></Link>
        <Link to="/about"><button style={{textDecoration: 'none'}}>About</button></Link>
        {/*<button style={{textDecoration: 'none'}}>Blog</button>*/}
      </div>
    );
  }
}

export default Nav;
