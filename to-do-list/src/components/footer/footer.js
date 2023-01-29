import React from 'react';
import './footer.css';
import Buttons from '../buttons/buttons';
import {useDispatch} from 'react-redux';
import {filterCompleted} from '../../management/features/listSlice';

const Footer = props => {
  const dispatch = useDispatch();
  const clearCompleted = () => {
    dispatch(filterCompleted([]));
  };

  return (
    <>
      <div className="footer-container">
        <text>{props.activeNumber} items left</text>
        <div className="middle-section">
          <Buttons buttonTitle="All" buttonTask={props.allTask}></Buttons>
          <Buttons
            buttonTitle="Active"
            buttonTask={props.activesTask}></Buttons>
          <Buttons
            buttonTitle="Completed"
            buttonTask={props.doneTask}></Buttons>
        </div>
        <Buttons
          buttonTitle="Clear completed"
          buttonTask={clearCompleted}></Buttons>
      </div>
    </>
  );
};

export default Footer;
