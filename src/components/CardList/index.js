import React from 'react'
import { Card } from '../'
import './styles.css';

// Uses a JSON - so I have the option to replace the source at some point
const CardList = ({cards, pageHandler}) =>
  <div className="cardList row md align-self-center">
    {cards.map(card =>
      <Card key={card.id} card={card} onClick={pageHandler} />
    )}
  </div>;

export default CardList
