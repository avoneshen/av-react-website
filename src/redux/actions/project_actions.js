import { FETCH_PROJECTS } from './types';

// Eventually get/post request to Amazon
const PROJECTS_URL = 'projects.json';
//const PROJECT_API_PARAMETERS = {};

// Allows Parameter Customisation but may not be required
//const buildUrl = (params) => {
  //const query = qs.stringify({ ...QUERY_PARAMS, l: x});
  //retun `${PROJECTS_URL}${query}`;
//};

// Requires refactor
// May not need the CB or params, just returns projects
export const fetchProjects = () => async (dispatch) => {
  try {
    //const url = buildUrl(params);
    const url = PROJECTS_URL;

    const projects = await fetch(url);
    const fetchedProjects = await projects.json()
    dispatch({ type: FETCH_PROJECTS, payload: fetchedProjects });

  } catch (e) {
    // Return an error => Fallback will be handled on the page if empty collection
    console.log(e);
  }
};
