import React, { useState } from "react";
import './App.css';
import Modal from "./Portal";

import FetchGreeting from './ReducerComp'

function App() {

  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(!showModal);
  return (
    
    <div className="App">
      {showModal && (
        <Modal onClose={handleClose}>
          <div>test</div>
        </Modal>
      )}
      <FetchGreeting />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;



