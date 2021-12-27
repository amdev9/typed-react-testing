import React, { useState } from "react";
import "./App.css";
import Modal from "./Portal";

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
    </div>
  );
}

export default App;
