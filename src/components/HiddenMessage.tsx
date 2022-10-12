import * as React from "react";
import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "./Portal";

type TCloseFunc = () => void;

type TFade = {
  in: boolean;
  timeout: number;
  onEnter: () => void;
  onExited: () => void;
};

type Props = {
  children: React.ReactNode;
} & TFade;

const Fade: FC<Props> = ({ children, ...props }) => {
  const nodeRef = React.useRef<HTMLHeadingElement>(null);
  return (
    <CSSTransition {...props} nodeRef={nodeRef} unmountOnExit>
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

const HiddenMessage: FC<{ initialShow: boolean }> = ({initialShow = false}) => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(initialShow);

  const handleClose: TCloseFunc = () => setShowMessage(!showMessage);

  return (
    <>
      {showButton && <button onClick={handleClose}>Show Message</button>}
      <Fade
        in={showMessage}
        timeout={300}
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Modal onClose={handleClose}>
          Animated alert message
          <p>This alert message is being transitioned in and out of the DOM.</p>
        </Modal>
      </Fade>
    </>
  );
};

export default HiddenMessage;
