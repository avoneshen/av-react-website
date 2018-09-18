import React from 'react';

const Button = ({cssClass, onClick, text}) =>
    <div className={cssClass} onClick={() => onClick ? onClick() : null }>
      { text }
    </div>;

export default Button;
