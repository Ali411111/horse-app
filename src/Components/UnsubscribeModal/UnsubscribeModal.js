import React from "react";
import "./UnsubscribeModal.css";
import ReactDOM from "react-dom";
import { IoWarningOutline } from "react-icons/io5";
export default function UnsubscribeModal({ onSubmit, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="Unsubscribe-modal">
        <IoWarningOutline className="warning-icon" />
        <span>Are you sure, you want to Unsubscribe?</span>
        <div className="Unsubscribe-modal-btns">
          <button onClick={onSubmit} className="yes-btn">
            Yes
          </button>
          <button onClick={onClose} className="no-btn">
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
