import React, { forwardRef } from "react";

const Modal = forwardRef(({ title, text, onClick, children }, ref) => {
  return (
    <div className="modal">
      <div className="modal-content" ref={ref}>
        <span className="close" onClick={onClick}>
          &times;
        </span>
        <h4>{title}</h4>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
});

export default Modal;
