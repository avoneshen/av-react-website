import React from 'react';

// Vars: { button: { style, text }, onClick }
const Button = ({cssClass, onClick, text}) =>
    <div className={cssClass} onClick={() => onClick ? onClick() : null }>
      { text }
    </div>;

export default Button;
