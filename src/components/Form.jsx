import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [numberOfPasswords, setNumberOfPasswords] = useState(0);
  const [passwords, setPasswords] = useState([]);

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formButtonHandler = (e) => {
    e.preventDefault();
    const newPasswords = [...passwords, password];
    setPasswords(newPasswords);
    setNumberOfPasswords(newPasswords.length);
    setPassword("");
    setFilteredData(newPasswords);
  };

  const deleteHandler = (index) => {
    console.log("delete clicked");
    const newPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(newPasswords);
    setFilteredData(newPasswords);
    setNumberOfPasswords(newPasswords.length);
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
      <h1>Password Keeper</h1>
      <h4>Total Passwords: {numberOfPasswords}</h4>
      <form>
        <input
          type="text"
          value={password}
          onChange={inputPasswordHandler}
          placeholder="Input Password"
          className="input"
        />
        <button onClick={formButtonHandler}>Add</button>
        <br />
        <br />
        <input
          type="text"
          value={searchInput}
          onChange={searchInputHandler}
          placeholder="search password"
        />
        <button onClick={searchButtonHandler}>Search</button>
      </form>
      {/* <h1>Password's List</h1>
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
      </ul> */}
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
    </>
  );
};

export default Form;
