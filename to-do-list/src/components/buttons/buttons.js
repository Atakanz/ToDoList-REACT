import React from 'react';

const Buttons = props => {
  return (
    <>
      <button onClick={props.buttonTask}>
        <p className="font-bold min-[250pp-sm sm:text-base">
          {props.buttonTitle}
        </p>
      </button>
    </>
  );
};

export default Buttons;
