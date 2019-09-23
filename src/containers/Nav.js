import React from 'react';

class Nav extends React.Component {
  render () {
    return (
      <div className="Nav">
        <button style={{textDecoration: 'none'}}>Projects</button>
        <button style={{textDecoration: 'none'}}>About</button>
        <button style={{textDecoration: 'none'}}>Blog</button>
      </div>
    );
  }
}

export default Nav;
