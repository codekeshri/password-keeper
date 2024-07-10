import React, { useContext } from "react";
import PasswordContext from "../Context/PasswordContext";

const SearchList = (props) => {
  const passwordCtx = useContext(PasswordContext);
  console.log("passwordList", passwordCtx);

  const filterdList = passwordCtx.passwords.filter((item) => {
    return item.password.includes(props.input);
  });

  return (
    <>
      <ul>
        {filterdList.map((passwordObj, index) => {
          return (
            <li key={index}>
              {passwordObj.site}
              {passwordObj.password}
            </li>
          );
        })}
      </ul>
      <ul></ul>
    </>
  );
};

export default SearchList;
