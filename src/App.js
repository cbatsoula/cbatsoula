import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './containers/Nav';
import Projects from './components/Projects';
import About from './containers/About';
import Footer from './components/Footer';

class App extends React.Component {


  render () {
    return (
      <>
        <Router>
        <Nav />
        <div className="Main">
          <div className="Landing">
          Hi, I'm Catherine Batsoula
          </div>
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
