import React, { Component } from 'react';
// Redux placeholder
import { ProjectDetail } from '../';

export default class ProjectList extends Component {
  render () {
    const { projects } = this.props;
    console.log('----- ProjList -----');
    console.log(projects);
    console.log('----- ProjList -----');
    return (
      <div>
        {projects.projects.map((project, i) =>
          <ProjectDetail key={i} project={project} />
        )}
      </div>
    );
  }
}
