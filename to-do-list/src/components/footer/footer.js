import React from 'react';
import './footer.css';
import Buttons from '../buttons/buttons';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <text>3 items left</text>
        <div className="middle-section">
          <Buttons buttonTitle="All"></Buttons>
          <Buttons buttonTitle="Active"></Buttons>
          <Buttons buttonTitle="Completed"></Buttons>
        </div>
        <Buttons buttonTitle="Clear completed"></Buttons>
      </div>
    </>
  );
};

export default Footer;
