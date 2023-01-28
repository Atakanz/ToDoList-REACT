import React from 'react';
import './listUnits.css';

const ListUnits = props => {
  return (
    <>
      <div className="list-units">{props.text}</div>
    </>
  );
};

export default ListUnits;
