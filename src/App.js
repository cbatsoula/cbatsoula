import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './containers/Nav';
import Projects from './components/Projects';
import About from './containers/About';
import Footer from './components/Footer';
import Main from "./IMG_4956.JPG"

class App extends React.Component {


  render () {
    return (
      <>
        <Router>
        <Nav />
        <div className="Main">

        <div className="MainText">
        <h2><span>Hi, I'm Catherine Batsoula</span></h2>
        <h3><span>Full Stack Web Developer</span></h3>
        </div>
        <img className="MainPhoto" src={Main} />

        </div>
        <Switch>
          <Route path='/projects' render={(routerProps) => <Projects {...routerProps} /> } />
          <Route path='/about' render={(routerProps) => <About {...routerProps} /> } />

        </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
