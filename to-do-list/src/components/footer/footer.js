import React from 'react';
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
      <div className="lg:grid lg:grid-cols-3 flex items-center min-[250px]:flex-row min-[250px]:flex min-[250px]:justify-evenly">
        <div>
          <p className="text-white min-[250px]:text-xs md:text-base">
            {props.activeNumber} items left
          </p>
        </div>
        <div className="flex justify-center space-x-1">
          <Buttons buttonTitle="All" buttonTask={props.allTask}></Buttons>
          <Buttons
            buttonTitle="Active"
            buttonTask={props.activesTask}></Buttons>
          <Buttons
            buttonTitle="Completed"
            buttonTask={props.doneTask}></Buttons>
        </div>
        <div className="grid justify-items-end">
          <Buttons
            buttonTitle="Clear completed"
            buttonTask={clearCompleted}></Buttons>
        </div>
      </div>
    </>
  );
};

export default Footer;
