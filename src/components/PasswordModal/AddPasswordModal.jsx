import React, { useState, useContext } from "react";
import PasswordContext from "../Context/PasswordContext";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { Input } from "../UI/Input";

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
    <Card className="modal">
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          className="input"
          value={site}
          placeholder="Site"
          onChange={(e) => setSite(e.target.value)}
        />
        <Input
          type="text"
          className="input"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={submitHandler}>Save</Button>
        <Button onClick={onClose}>Close</Button>
      </form>
    </Card>
  );
};

export default PasswordModal;
