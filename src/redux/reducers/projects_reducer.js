import {
  FETCH_PROJECTS
} from '../actions/types';

const INITIAL_STATE = {
  projects: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects.map(project => ({...project}))
      };

    default:
      return state;
  }
}
