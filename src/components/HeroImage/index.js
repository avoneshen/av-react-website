// Unused. An alternative approach for the homepage.
import React, { img } from 'react';
import './styles.css';

const HeroImage = ({ src, alt, onClick, ctaText }) =>
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
      <div className="overlay"/>
      <div className="ctaButton" onClick={onClick}>
        { ctaText }
      </div>
    </div>
  </div>;

export default HeroImage
