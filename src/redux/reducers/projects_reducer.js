import {
  FETCH_PROJECTS
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}
