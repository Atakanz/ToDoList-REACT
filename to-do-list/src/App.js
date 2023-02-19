import React from 'react';
import './App.css';
import Container from './components/container/container';
import {Provider} from 'react-redux';
import {store} from './management/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-testid="container">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
