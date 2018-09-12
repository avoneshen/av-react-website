import React from 'react';
// Redux placeholder
import { ProjectDetail } from '../';

const ProjectList = ({projects}) => {
  return (
    <div>
      {projects.map((project, i) =>
        <ProjectDetail key={i} project={project} />
      )}
    </div>
  );
}
export default ProjectList
