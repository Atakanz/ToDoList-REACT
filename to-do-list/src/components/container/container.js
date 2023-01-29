import React, {useState, useEffect} from 'react';
import './container.css';
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
    <li key={index}>
      <ListUnits text={todo} />
    </li>
  ));
  return (
    <>
      <section className="container">
        <Header />
        {todoItems}
        <Footer
          activeNumber={activeOnes.length}
          activesTask={setActiveOnes}
          allTask={setAll}
          doneTask={setDone}
        />
      </section>
    </>
  );
};

export default Container;
