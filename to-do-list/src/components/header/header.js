import React, {useState} from 'react';
import './header.css';
import {setList} from '../../management/features/listSlice';
import {useDispatch} from 'react-redux';

const Header = () => {
  const [newTask, setNewTask] = useState(null);
  const dispatch = useDispatch();
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      dispatch(setList(newTask));
      setNewTask('');
    }
  };
  return (
    <div className="header-container">
      <div className="input-div">
        <input
          onKeyDown={handleKeyDown}
          name="newTask"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="What needs to be done?"></input>
      </div>
    </div>
  );
};

export default Header;
