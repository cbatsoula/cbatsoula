import React from 'react';

class ProjectCard extends React.Component {
  state = {
    wavesonClient: "https://github.com/cbatsoula/waveson-client",
    wavesonAPI: "https://github.com/cbatsoula/waveson-api",
    skinnClient: "https://github.com/ekatsuta/mod4-final-project/tree/master/skinn-app-frontend",
    skinnAPI: "https://github.com/ekatsuta/mod4-final-project/tree/master/skinn-app-api",
    explore: "https://github.com/cbatsoula/_explore_",
    cardClient: "https://github.com/oscei303/cardGame_frontend",
    cardAPI: "https://github.com/oscei303/cardGame_backend"
  }
  WavesonHandleLinks = (event) => {
    // console.log(event.target.innerText)
    if (event.target.innerText === "Client") {
      return window.location = this.state.wavesonClient}
    else if (event.target.innerText === "API") {
      return window.location = this.state.wavesonAPI
    }
  }

  skinnHandleLinks = (event) => {
    if (event.target.innerText === "Client") {
      return window.location = this.state.skinnClient
    } else if (event.target.innerText === "API") {
      return window.location = this.state.skinnAPI
    }
  }

  exploreHandleLinks = (event) => {
    if (event.target.innerText === "Client") {
      return window.location = this.state.explore
    }
  }

  cardGameHandleLinks = (event) => {
    if (event.target.innerText === "Client") {
      return window.location = this.state.cardClient
    } else if (event.target.innerText === "API") {
      return window.location = this.state.cardAPI
    }
  }
  render () {
    return (
        <div className="Projects-text">
          <div className="waveson">
            <ul>
              <h4>WavesOn - <button onClick={(event) => {this.WavesonHandleLinks(event)}}> Client </button> |
              <button onClick={(event) => {this.WavesonHandleLinks(event)}}> API </button></h4>
              <li>Marine weather and journal web app to allow users to check hourly weather at favorite and nearby (with a radius of roughly 13 miles) beach locations. Users can document their experience at that beach by writing notes and uploading a photo to look back at that moment. </li>
              <li>Utilized Ruby on Rails, React,js, and Custom CSS. Uses Google Products (Places API, Geolocation API, Geocoding API, Maps Javascript API) and World Wide Weather Marine API to grab the user’s location, return beach locations along with location weather, and Cloudinary to upload and manage photos. </li>
            </ul>
          </div>
          <center><iframe width="560" height="315" src="https://www.youtube.com/embed/eRYN-f9j_Z8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

          <div className="explore">
            <ul>
              <h4>_explore_ - <button onClick={(event) => {this.exploreHandleLinks(event)}}> Client </button> </h4>
              <li>Explores our solar system using NASA’s photo of the day, and Le Systeme Solaire API for pulling data on our neighboring celestial objects. </li>
              <li>Leveraged React.js and Semantic-UI-React. </li>

              </ul>
          </div>

          <div className="skinn">
            <ul>
              <h4>SKINN - <button onClick={(event) => {this.skinnHandleLinks(event)}}> Client </button> |
              <button onClick={(event) => {this.skinnHandleLinks(event)}}>  API </button></h4>
              <li>10 step skincare customizer with review functionality to help women find their top performing natural products.</li>
              <li>Used Ruby on Rails, React.js, and Custom CSS. Uses a seeded database of natural products. </li>
            </ul>
          </div>
          <center><iframe width="560" height="315" src="https://www.youtube.com/embed/QTLbp_2GdrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

          <div className="cardGame">
            <ul>
              <h4>Card Game - <button onClick={(event) => {this.cardGameHandleLinks(event)}}> Client </button> |
              <button onClick={(event) => {this.cardGameHandleLinks(event)}}>  API </button></h4>
              <li>Fun memory game, created to match cards with the same programming language logo to earn points. </li>
              <li>Made with Ruby on Rails, and Javascript. </li>
            </ul>
          </div>
          <center><iframe width="560" height="315" src="https://www.youtube.com/embed/cuO5duqCoNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

        </div>
    );
  }
}

export default ProjectCard;
