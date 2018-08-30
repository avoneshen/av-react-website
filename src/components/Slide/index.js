import React from 'react';
import './styles.css';

const Slide = (props) => {
  return (
    <div className="slide row col-md-8">
      {props.children}
    </div>
  )
}

export default Slide;
