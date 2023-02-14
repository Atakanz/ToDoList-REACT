import React, {useState, useEffect} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import {useSelector} from 'react-redux';
import ListUnits from '../listUnits/listUnits';

const Container = () => {
  const [currentList, setCurrentList] = useState([]);
  const list = useSelector(state => state.list.list);
  const doneTasks = useSelector(state => state.list.doneList);
  const activeOnes = list.filter(item => {
    return doneTasks.indexOf(item) === -1;
  });
  const setActiveOnes = () => {
    setCurrentList(activeOnes);
  };
  const setAll = () => {
    setCurrentList(list);
  };
  const setDone = () => {
    setCurrentList(doneTasks);
  };
  useEffect(() => {
    setCurrentList(list);
  }, [list]);
  const todoItems = currentList.map((todo, index) => (
    <li key={index} className={`w-full`}>
      <ListUnits text={todo} />
    </li>
  ));

  return (
    <>
      <div
        className={`px-4 border-2 border-white rounded-3xl 2xl:w-1/2 min-[250px]:w-full md:w-4/5 py-8`}>
        <div className="flex items-center">
          <Header />
        </div>
        <div
          className={`my-1 ${
            currentList.length > 7 ? 'columns-2' : 'columns-1'
          }`}>
          <div className="space-y-1">{todoItems}</div>
        </div>
        <div>
          <Footer
            activeNumber={activeOnes.length}
            activesTask={setActiveOnes}
            allTask={setAll}
            doneTask={setDone}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
