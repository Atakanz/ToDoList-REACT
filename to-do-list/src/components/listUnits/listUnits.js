import React, {useState, useEffect} from 'react';
import {
  setDoneList,
  undoDoneList,
  editItem,
} from '../../management/features/listSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const ListUnits = props => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState();
  const [modal, setModal] = useState(false);
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
  useEffect(() => {
    setEditedTask(props.text);
  }, [reEdit]);
  const editTask = event => {
    if (event.key === 'Enter' && editedTask) {
      dispatch(editItem([props.text, editedTask]));
      setReEdit(false);
    }
  };
  return (
    <>
      <div className="flex flex-row rounded-2xl bg-white ">
        <div className="flex px-1">
          <input
            type="checkbox"
            checked={isDone ? true : false}
            onChange={handleChange}></input>
        </div>
        {reEdit ? (
          <div className="flex items-center justify-center">
            <input
              onDoubleClick={() => setReEdit(false)}
              className="bg-white flex justify-items-stretch items-stretch border-0 min-[250px]:text-xs md:text-base lg:text-lg outline-none text-editColor"
              onKeyDown={editTask}
              name="editTask"
              value={editedTask}
              onChange={e => setEditedTask(e.target.value)}></input>
          </div>
        ) : (
          <div className="truncate flex flex-1 shrink-0 items-center ">
            <p
              onMouseEnter={() => setModal(true)}
              onMouseLeave={() => setModal(false)}
              onDoubleClick={!isDone ? () => setReEdit(true) : null}
              class={`flex items-center min-[250px]:text-xs md:text-base lg:text-lg ${
                isDone ? 'line-through' : ''
              }`}>
              {props.text}
            </p>
          </div>
        )}
        {modal && (
          <div className="bg-white absolute bottom-0 right-0 rounded-xl bg-red p-3 m-2 min-[250px]:text-xs md:text-base">
            {props.text}
          </div>
        )}
      </div>
    </>
  );
};

export default ListUnits;
