import { FETCH_CARDS } from './types';

// Projects will become external call but this is likely to stay local for reliability.
const CARDS_URL = 'cards.json';

// The payload dispatched is: payload: { cards: [] }
export const fetchCards = () => async (dispatch) => {
  try {
    const url = CARDS_URL;
    const cards = await fetch(url);
    const fetchedCards = await cards.json()
    dispatch({ type: FETCH_CARDS, payload: {cards: fetchedCards.cards} });

  } catch (e) {
    // Return an error => Fallback will be handled on the page if empty collection
    dispatch({ type: FETCH_CARDS, payload: { cards: []} });
  }
};
