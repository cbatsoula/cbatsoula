import React from 'react';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  render () {
    return (
      <>
      <h3>Projects</h3>
      <div className="Projects">
      <ProjectCard />
      </div>
      </>
    );
  }
}

export default Projects;
