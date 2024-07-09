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
