import React, { img } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '../';
import './styles.css';

// Individual Slide of a React-Bootstrap Carousel.
// Vars: { id, src, alt, ctaPath, ctaText } - Props same as a Card component.
// To be made more terse using spread operators
const CarouselCard = ({active, index, animateOut, animateIn, direction, onAnimateOutEnd, card, onClick}) =>
  <Carousel.Item
    className="carouselCard"
    active={active}
    index={index}
    animateOut={animateOut}
    animateIn={animateIn}
    direction={direction}
    onAnimateOutEnd={onAnimateOutEnd}
  >
    <img src={card.src} alt={card.alt} />
    <Carousel.Caption>
      <Button cssClass="ctaButton" onClick={() => onClick(card.ctaPath)} text={card.ctaText}/>
    </Carousel.Caption>
  </Carousel.Item>

export default CarouselCard;
