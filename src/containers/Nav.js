import React from 'react';

class Nav extends React.Component {
  buttonClick = () => {
    console.log("lets seeee")
  }
  render () {

    return (
      <div className="Nav">
        <button style={{textDecoration: 'none'}} onClick={this.buttonClick}>Projects</button>
        <button style={{textDecoration: 'none'}}>About</button>
        <button style={{textDecoration: 'none'}}>Blog</button>
      </div>
    );
  }
}

export default Nav;
