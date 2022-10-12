
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Portal.css";


let modalRoot: HTMLElement | null = document.getElementById("modal-root");
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}

type Props = {
  children: React.ReactNode,
  onClose: () => void,
}

const Modal: React.FC<Props> = (props: Props) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className="wrapper" onClick={props.onClose}>
      <div className="child" onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}>
        {props.children}
        <hr />
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>,
    el
  );
};

export default Modal;
