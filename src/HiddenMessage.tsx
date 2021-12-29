import * as React from "react";
import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "./Portal";

type TCloseFunc = () => void;

const HiddenMessage: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleClose: TCloseFunc = () => setShowMessage(!showMessage);
  const nodeRef = React.useRef(null);

  return (
    <>
      {showButton && <button onClick={handleClose}>Show Message</button>}
      <CSSTransition
        nodeRef={nodeRef}
        in={showMessage}
        timeout={300}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div ref={nodeRef}>
          <Modal onClose={handleClose}>
            Animated alert message
            <p>
              This alert message is being transitioned in and out of the DOM.
            </p>
          </Modal>
        </div>
      </CSSTransition>
    </>
  );
};

export default HiddenMessage;
