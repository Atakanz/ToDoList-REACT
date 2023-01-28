import React from 'react';
import './container.css';
import Footer from '../footer/footer';
import ListSection from '../listSection/listSection';
import Header from '../header/header';

const Container = () => {
  return (
    <>
      <section className="container">
        <Header />
        <ListSection />
        <Footer />
      </section>
    </>
  );
};

export default Container;
