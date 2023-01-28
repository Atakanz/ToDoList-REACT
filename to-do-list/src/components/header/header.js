import React, {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import './header.css';
import {setList} from '../../management/features/listSlice';
import {useDispatch} from 'react-redux';

const Header = () => {
  const [newTask, setNewTask] = useState(null);
  const dispatch = useDispatch();
  const addNewItem = () => {
    dispatch(setList(newTask));
  };
  return (
    <div className="header-container">
      <div className="input-div">
        <input
          onChange={e => setNewTask(e.target.value)}
          placeholder="What needs to be done?"></input>
      </div>
      <div className="icon-div">
        <button className="icon-button" onClick={addNewItem}>
          <FaIcons.FaPlusCircle className="add-icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
