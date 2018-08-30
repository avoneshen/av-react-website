import React from 'react';
// any default styling should go here
import './styles.css';

const SlideSection = (props) => {
  return (
    <div className="slideSection row">
      {props.children}
    </div>
  );
};

export default SlideSection;
