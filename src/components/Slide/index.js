import React from 'react';
import './styles.css';

// Container for a number of SlideSections which are supplied by ProjectList and received by props.
const Slide = (props) => {
  return (
    <div className="slide row container col-md-8">
      {props.children}
    </div>
  )
}

export default Slide;
