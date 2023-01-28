import React from 'react';
import './buttons.css';

const Buttons = props => {
  return (
    <>
      <button onClick={props.buttonTask}>
        <text>{props.buttonTitle}</text>
      </button>
    </>
  );
};

export default Buttons;
