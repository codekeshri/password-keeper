import React, { useContext } from "react";
import PasswordContext from "../Context/PasswordContext";
import "./Header.css";

const Header = () => {
  const passwordCtx = useContext(PasswordContext);

  return (
    <div className="header">
      <h1>Password Keeper</h1>
      <div>
        <span>TOTAL</span>
        <span className="notification-badge">
          {passwordCtx.passwords.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
