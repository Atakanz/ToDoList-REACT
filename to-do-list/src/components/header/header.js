import React, {useState} from 'react';
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
    <div className="w-full flex justify-center items-center rounded-2xl">
      <div className="w-full flex justify-center">
        <input
          onKeyDown={handleKeyDown}
          className="bg-white outline-none md:py-1"
          name="newTask"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="What needs to be done?"></input>
      </div>
    </div>
  );
};

export default Header;
