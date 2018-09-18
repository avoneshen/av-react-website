import React, { Component } from "react";
import { ProjectList } from '../components';
import {connect} from 'react-redux';
import { fetchProjects } from '../redux/actions/project_actions';

class Projects extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProjects());
  }

  render() {
    const { projects } = this.props;

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

function mapStateToProps(state) {
  const { projects } = state;
  return projects;
}

export default connect(mapStateToProps)(Projects);
