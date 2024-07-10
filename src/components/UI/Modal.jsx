import React from "react";
import Card from "./Card";
import "./Modal.css";
import { PasswordForm } from "../PasswordForm";

const Modal = (props) => {
  return (
    <div className="backdrop">
      <Card className="card modal">
        <PasswordForm className="pf" onConfirm={props.onConfirm} />
      </Card>
    </div>
  );
};

export default Modal;

// import React from "react";
// import Button from './Button'

// export const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <Button className="close-button" onClick={onClose}>
//           Close
//         </Button>
//         <div className="modal-content">{children}</div>
//       </div>
//     </div>
//   );
// };
