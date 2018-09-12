import React, { Component } from "react";
import { ProjectList } from '../components';

// At some point, projects will be driven by an API and dynamically pull.
// Would need to introduce more robust state control then too.
export default class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  async componentWillMount () {
    try {
      const projects = await this.getProjects();
      this.setState({ projects });
    } catch (e) {
      // Process error
      console.log(e);
      return [];
    }
  }

  // Validate if the returned value is valid
  async getProjects() {
    try {
      const projects = await fetch('projects.json');
      const fetchedProjects = await projects.json()
      console.log(fetchedProjects);
      return fetchedProjects.projects.map(project => ({...project}));
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  render() {
    const projects = this.state.projects;
    return (
      <div className="projects">
        <div className="projectsTitle">
          <h3>My Projects</h3>
        </div>
        <div className="projectsText">
          <p>I'm almost always working on something new. Why not check out some of my highlights below?</p>
          <p>I open source when I can, so be sure to check out the Github links too.</p>
        </div>
        <ProjectList projects={projects}/>
      </div>
    );
  }
}
