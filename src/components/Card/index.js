import React, { img } from 'react';
import { Button } from '../';
import './styles.css';

// Vars: { id, src, alt, ctaPath, ctaText }
const Card = ({card, onClick}) =>
  <div key={card.id} className="card col-sm-4">
    <img src={card.src} alt={card.alt} />
    <div className="overlay"/>
    <Button cssClass="ctaButton" onClick={() => onClick(card.ctaPath)} text={card.ctaText}/>
  </div>;

export default Card;
