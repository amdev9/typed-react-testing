import React, { useState } from "react";
import './App.css';
import Modal from "./Portal";
import FetchGreeting from './ReducerComp'
import MainViewTranslate from './MainViewTranslate'

function App() {

  const [showModal, setShowModal] = useState<boolean>(true);
  const handleClose = () => setShowModal(!showModal);
  return (
    <div className="App">
      {showModal && (
        <Modal onClose={handleClose}>
          <div>test</div>
        </Modal>
      )}
      <FetchGreeting />
      <MainViewTranslate />    
    </div>
  );
}

export default App;



