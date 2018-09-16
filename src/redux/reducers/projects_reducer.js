import {
  FETCH_PROJECTS
} from '../actions/types';

const INITIAL_STATE = {
  projects: { projects: [] }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log('---Payload---');
      console.log(action.payload.projects);
      console.log('---Payload---');

      console.log('---Reducer Return---');
      console.log(action.payload.projects.map(project => ({...project})));
      console.log('---Reducer Return---');


      return {
        ...state,
        projects: action.payload.projects.map(project => ({...project}))
      };

    default:
      return state;
  }
}
