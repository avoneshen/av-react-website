import { FETCH_PROJECTS } from './types';

// Eventually get/post request to Amazon
const PROJECTS_URL = 'projects.json';

export const fetchProjects = () => async (dispatch) => {
  try {
    const url = PROJECTS_URL;
    const projects = await fetch(url);
    const fetchedProjects = await projects.json()
    dispatch({ type: FETCH_PROJECTS, payload: fetchedProjects });

  } catch (e) {
    // Return an error => Fallback will be handled on the page if empty collection
    dispatch({ type: FETCH_PROJECTS, payload: { projects: [] } });
  }
};
