import React, { Component } from 'react';
// Redux placeholder
import { ProjectDetail } from '../';

// Receives and creates a list of Project components.
export default class ProjectList extends Component {
  render () {
    const { projects } = this.props;
    return (
      <div>
        {projects.map((project, i) =>
          <ProjectDetail key={i} project={project} />
        )}
      </div>
    );
  }
}
