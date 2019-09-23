import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './containers/Nav';
import Projects from './components/Projects';
import About from './containers/About';

class App extends React.Component {

  // componentDidMount() {
  //       const el = document.querySelector('nav');
  //       this.setState({
  //         top: el.offsetTop,
  //         height: el.offsetHeight});
  //       window.addEventListener('scroll', this.handleScroll);
  //   }
  //
  // componentDidUpdate() {
  //       this.state.scroll > this.state.top ?
  //           document.body.style.paddingTop = `${this.state.height}px` :
  //           document.body.style.paddingTop = 0;
  //   }

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
        <Projects />
      </>
    );
  }
}

export default App;
