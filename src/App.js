import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Nav from './containers/Nav';
import Projects from './components/Projects';
import About from './containers/About';
import Footer from './components/Footer';

class App extends React.Component {

  render () {
    return (
      <>

        <Nav />
        <div className="Main">
          <div className="Landing">
          Hi, I'm Catherine Batsoula
          </div>
        </div>
        <Projects />
        <About />
        <Footer />
      </>
    );
  }
}

export default App;
