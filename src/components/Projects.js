import React from 'react';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  render () {
    return (
      <>
      <div className="Projects">
      {/*<h3>Projects</h3>*/}
      <ProjectCard />
      </div>
      </>
    );
  }
}

export default Projects;
