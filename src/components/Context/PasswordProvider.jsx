// In this componenet which is context API first ll create context and provide it.
import React, { useState } from "react";
import PasswordContext from "./PasswordContext";

const PasswordProvider = (props) => {
  const [passwords, setPasswords] = useState([]);
  const addPasswordHandler = (password) => {
    setPasswords((prevPasswords) => [...prevPasswords, password]);
  };

  const editHandler = (index, newPassword) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = newPassword;
    setPasswords(updatedPasswords);
  };

  const deleteHandler = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  const passwordCtx = {
    passwords: passwords,
    addPassword: addPasswordHandler,
    filteredData: [],
    editPassword: editHandler,
    deletePassword: deleteHandler,
  };

  return (
    <PasswordContext.Provider value={passwordCtx}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
