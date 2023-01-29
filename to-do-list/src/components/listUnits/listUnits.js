import React, {useState} from 'react';
import './listUnits.css';
import {
  setDoneList,
  undoDoneList,
  editItem,
} from '../../management/features/listSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const ListUnits = props => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState(props.text);
  const [checked, setChecked] = useState(false);
  const [reEdit, setReEdit] = useState(false);
  const done = useSelector(state => state.list.doneList);
  const isDone = done.some(item => item === props.text);
  const handleChange = async () => {
    await setChecked(!checked);
    if (isDone === false) {
      dispatch(setDoneList(props.text));
    } else if (isDone === true) {
      dispatch(undoDoneList(props.text));
    }
  };
  const editTask = event => {
    if (event.key === 'Enter') {
      dispatch(editItem([props.text, editedTask]));
      setReEdit(false);
    }
  };
  return (
    <>
      <div
        className="list-units"
        style={{backgroundColor: isDone ? 'white' : '#edf5f9'}}>
        <div className="checkbox-div">
          <input
            type="checkbox"
            checked={isDone ? true : false}
            onChange={handleChange}></input>
        </div>
        {reEdit ? (
          <input
            onDoubleClick={() => setReEdit(false)}
            className="edit-input"
            onKeyDown={editTask}
            name="editTask"
            value={editedTask}
            onChange={e => setEditedTask(e.target.value)}></input>
        ) : (
          <text
            onDoubleClick={!isDone ? () => setReEdit(true) : null}
            className={isDone ? 'text-done' : 'text-undone'}>
            {props.text}
          </text>
        )}
      </div>
    </>
  );
};

export default ListUnits;
