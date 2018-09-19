import React from 'react';

// Creates a button, with a custom css class, text and onClick function
const Button = ({cssClass, onClick, text}) =>
    <div className={cssClass} onClick={() => onClick ? onClick() : null }>
      { text }
    </div>;

export default Button;
