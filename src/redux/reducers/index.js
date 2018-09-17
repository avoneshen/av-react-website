import { combineReducers } from 'redux';
import projects from './projects_reducer';
import cards from './cards_reducer';

const website = combineReducers({
  projects,
  cards
});

export default website;
