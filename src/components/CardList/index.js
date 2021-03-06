import React from 'react';
import { Card, CarouselCard } from '../';
import { Carousel } from 'react-bootstrap';
import './styles.css';

// Takes a list of Cards and creates a carousel for Mobile and a list of Cards for desktop
// 3 cards to a row.
const CardList = ({cards, pageHandler}) => {

  return (
    <div>
      { /* Mobile Block */ }
      <div className="mobile visible-xs">
        <div className="col-xs-1"/>
        <div className="col-xs-10">
          <Carousel>
            {cards.map((card, i) =>
              <CarouselCard key={i} card={card} onClick={pageHandler} />
            )}
          </Carousel>
        </div>
        <div className="col-xs-1"/>
      </div>
      { /* Desktop Block */ }
      <div className="desktop hidden-xs">
        <div className="col-sm-1"/>
        <div className="cardList col-sm-10 row sm align-self-center">
          {cards.map((card, i) =>
            <Card key={i} card={card} onClick={pageHandler} />
          )}
        </div>
        <div className="col-sm-1"/>
      </div>
    </div>
  );
}
export default CardList
