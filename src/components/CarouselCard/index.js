import React, { img } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '../';
import './styles.css';

// Vars: { id, src, alt, ctaPath, ctaText }
// This function uses a lot of params inherited from parent Carousel
// I can probably make more terse using spread operators
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
