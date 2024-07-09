import React, { useState, useContext } from "react";
import PasswordContext from "../Context/PasswordContext";

const PasswordModal = ({ onClose }) => {
  const [site, setSite] = useState("");
  const [password, setPassword] = useState("");
  const passwordCtx = useContext(PasswordContext);

  const submitHandler = (e) => {
    e.preventDefault();
    passwordCtx.addPassword({ site, password });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={submitHandler}>
        <label>Site</label>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        ></input>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={submitHandler}>Save</button>
        <button onClick={onClose}></button>
      </form>
    </div>
  );
};

export default PasswordModal;
