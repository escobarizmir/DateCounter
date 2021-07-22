import React from 'react';
import './app.scss';
import Background from './components/bg/bg';
import Modal from './components/modal/modal';

function App() {
  return (
    <>
      <div className="app">
          <Modal/>
        <div className="madeBy">
          Made by <a href="https://cheatsnake.github.io/">Yury</a>
        </div>
      </div>
      <Background/>
    </>
  )
}

export default App;
