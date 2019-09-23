import React from 'react';

class Nav extends React.Component {
  render () {
    return (
      <div className="Nav">
        <ul>
          <li><a href="#one">one</a></li>
          <li><a href="#two">two</a></li>
          <li><a href="#three">three</a></li>
          <li><a href="#four">four</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
