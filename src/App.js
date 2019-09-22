import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './containers/Nav';
import Projects from './components/Projects';
import About from './containers/About';

class App extends React.Component {
  render () {
    return (
      <>
        <div className="App">
          <Nav />
          <div className="Landing">
          Hi, I'm Catherine Batsoula
          </div>
        </div>
        <Projects />
        <About />
      </>
    );
  }
}

export default App;
