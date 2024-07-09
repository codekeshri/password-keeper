import React, { useState } from "react";
import Card from "./UI/Card";
import "./PasswordForm.css";
import Button from "./UI/Button";

export const PasswordForm = (props) => {
  const [siteInput, setSiteInput] = useState("");
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //   const [numberOfPasswords, setNumberOfPasswords] = useState(0);
  const [passwords, setPasswords] = useState([]);

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const siteInputHandler = (e) => {
    setSiteInput(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log("addHandler clicked");
  };

  const formButtonHandler = (e) => {
    e.preventDefault();
    const newPasswords = [...passwords, password];
    setPasswords(newPasswords);
    // setNumberOfPasswords(newPasswords.length);
    setPassword("");
    setFilteredData(newPasswords);
  };

  const deleteHandler = (index) => {
    console.log("delete clicked");
    const newPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(newPasswords);
    setFilteredData(newPasswords);
    // setNumberOfPasswords(newPasswords.length);
  };

  const editHandler = (e) => {
    console.log("edit working");
  };

  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const searchButtonHandler = (e) => {
    e.preventDefault();
    console.log("search button clicked");
    filterData(searchInput);
    setSearchInput("");
  };

  const filterData = (input) => {
    const filtered = passwords.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    console.log("filter data", filtered);
    setFilteredData(filtered);
  };

  return (
    <>
      <Card>
        <form className="password-form">
          <div>
            <p>Be Assured! Your password is safe in PK</p>
            <input
              type="text"
              value={siteInput}
              onChange={siteInputHandler}
              placeholder="Input Site Name"
            />
            <input
              type="text"
              value={password}
              onChange={inputPasswordHandler}
              placeholder="Input Password"
              className="passwordInput"
            />
          </div>
          <div>
            <Button className="actions" onClick={addHandler}>
              Add
            </Button>
            <Button className="actions" onClick={props.onConfirm}>
              Close
            </Button>
          </div>
        </form>
      </Card>
      <div>
        <Card>
          <h1>Search List</h1>
          <ul>
            {filteredData.map((password) => {
              return (
                <li key={Math.random()}>
                  {password}
                  <button onClick={editHandler}>Edit</button>
                  <button onClick={deleteHandler}>Delete</button>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <div>
        <Card>
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
        </Card>
      </div>
    </>
  );
};
