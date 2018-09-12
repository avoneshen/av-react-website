import { axios } from 'axios';
import { FETCH_PROJECTS } from './types';

// Temporary / Placeholder import from JSON => Pre-API
import PROJECT_DATA from './projects.json';

const PROJECTS_URL = '';
const PROJECT_API_PARAMETERS = {};

// Allows Parameter Customisation but may not be required
const buildUrl = (params) => {
  //const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip});
  //retun `${JOB_ROOT_URL}${query}`;
};

// Requires refactor
// May not need the CB or params, just returns projects
export const fetchProjects = () => async (dispatch) => {
  try {
    //const url = buildUrl(params);
    //let { data } = await axios.get(url);
    const data = PROJECT_DATA;
    //console.log(data);
    dispatch({ type: FETCH_PROJECTS, payload: data });
  } catch (e) {
    // Return an error => Fallback will be handled on the page if empty collection
    console.log(e);
  }
};
