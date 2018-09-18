import React from 'react';
// any default styling should go here
import './styles.css';

// Implements one section of a slide such as image or text. 
const SlideSection = (props) => {
  return (
    <div className="slideSection row">
      {props.children}
    </div>
  );
};

export default SlideSection;
