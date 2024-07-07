import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  // state to hold the inputs
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [numberOfPasswords, setNumberOfPasswords] = useState(0);
  const [button, setButton] = useState(false);

  // state to hold the list of all passwords
  const [passwords, setPasswords] = useState([]);

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const formButtonHandler = (e) => {
    e.preventDefault();
    setPasswords([...passwords, password]);
    setPassword("");
    console.log(passwords);
  };

  const deleteHandler = (e) => {
    console.log("delete working");
  };

  const editHandler = (e) => {
    console.log("edit working");
  };

  return (
    <div className="form">
      <h1>Password Keeper</h1>
      <h4>Total Passwords: {numberOfPasswords}</h4>
      <form>
        <input
          type="text"
          value={password}
          onChange={inputPasswordHandler}
          placeholder="Input Password"
        />
        <button onClick={formButtonHandler}>Add</button>
        <br />
        <br />
        <input type="text" />
        <button>Search</button>
      </form>
      <h1>Password's List</h1>
      <ul>
        {passwords.map((password) => {
          return (
            <li key={Math.random()}>
              {password}
              <button onClick={editHandler}>Edit</button>
              <button onClick={deleteHandler}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
