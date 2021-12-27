
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Portal.css";

// this is only here for HMR/codesandbox purposes
// in a real scenario, you'd probably just do the stuff
// that's in the if statement.
let modalRoot: HTMLElement | null = document.getElementById("modal-root");
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}

interface Props {
  children: JSX.Element,
  onClose: () => void,
}

const Modal = (props: Props) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className="wrapper" onClick={props.onClose}>
      <div className="child" onClick={(e) => e.stopPropagation()}>
        {props.children}
        <hr />
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>,
    el
  );
};

export default Modal;
