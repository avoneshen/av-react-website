import React from "react";
import { ProjectDetail } from '../components';

// At some point, projects will be driven by an API and dynamically pull.
// Would need to introduce more robust state control then too.
export default () =>
  <div className="projects">
    <div className="projectsTitle">
      <h3>My Projects</h3>
    </div>
    <div className="projectsText">
      <p>I'm almost always working on something new. Why not check out some of my highlights below?</p>
      <p>I open source when I can, so be sure to check out the Github links too.</p>
    </div>
    <ProjectDetail/>
  </div>;
