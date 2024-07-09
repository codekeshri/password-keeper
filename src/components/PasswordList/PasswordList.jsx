import React, { useContext } from "react";
import PasswordContext from "../Context/PasswordContext";

const PasswordList = () => {
  const passwordCtx = useContext(PasswordContext);

  return (
    <ul>
      {passwordCtx.passwords.map((passwordObj, index) => {
        return (
          <li key={index}>
            {passwordObj.site}
            {passwordObj.password}
          </li>
        );
      })}
    </ul>
  );
};

export default PasswordList;
