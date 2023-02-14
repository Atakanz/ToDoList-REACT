import React from 'react';

const Buttons = props => {
  return (
    <>
      <button onClick={props.buttonTask}>
        <text className="font-bold min-[250px]:text-sm sm:text-base">
          {props.buttonTitle}
        </text>
      </button>
    </>
  );
};

export default Buttons;
