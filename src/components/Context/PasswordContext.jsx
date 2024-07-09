// In this componenet which is context API first ll create context and provide it.
import React, { useState } from "react";

// create the context first
const PasswordContext = React.createContext({
  passwords: [],
  numberOfPasswords: 0,
  addPassword: (password) => {},
});

// attach the context with a provider to make it available globally
export const PasswordProvider = (props) => {
  const [passwords, setPasswords] = useState([]);
  const addPassword = (password) => {
    setPasswords((passwords) => [...passwords, password]);
  };

  return (
    <PasswordContext.Provider value={{ passwords, addPassword: addPassword }}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
