import {
  FETCH_CARDS
} from '../actions/types';

const INITIAL_STATE = {
  cards: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload.cards
      };

    default:
      return state;
  }
}
