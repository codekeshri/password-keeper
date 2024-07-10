import React, { useContext } from "react";
import PasswordContext from "../Context/PasswordContext";
import Button from "../UI/Button";
import Card from "../UI/Card";

const PasswordList = () => {
  const passwordCtx = useContext(PasswordContext);

  return (
    <>
      <ul>
        {passwordCtx.passwords.map((passwordObj, index) => {
          return (
            <Card className="cardlist">
              <li key={index}>
                {passwordObj.site}
                {passwordObj.password}
                <Button>Edit</Button>
                <Button>Delete</Button>
              </li>
            </Card>
          );
        })}
      </ul>
    </>
  );
};

export default PasswordList;
