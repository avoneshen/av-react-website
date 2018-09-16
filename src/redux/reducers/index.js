import { combineReducers } from 'redux';
import projects from './projects_reducer';

const website = combineReducers({
  projects
});

export default website;
