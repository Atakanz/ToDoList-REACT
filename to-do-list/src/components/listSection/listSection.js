import React, {useEffect, useState} from 'react';
import './listSection.css';
import ListUnits from '../listUnits/listUnits';
import {useSelector} from 'react-redux';

const ListSection = () => {
  const [currentList, setCurrentList] = useState([]);
  const list = useSelector(state => state.list.list);
  useEffect(() => {
    setCurrentList(list);
  }, [list]);
  console.log('CClist', currentList);
  return (
    <>
      <div className="list-section-container">
        <ul>
          {currentList.map((task, index) => {
            <li key={index}>
              <p>{task}</p>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ListSection;
