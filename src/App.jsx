import "./App.css";
import React, { useContext, useState } from "react";
import PasswordContext from "./components/Context/PasswordContext";
import PasswordProvider from "./components/Context/PasswordProvider";
import PasswordModal from "./components/PasswordModal/AddPasswordModal";
import PasswordList from "./components/PasswordList/PasswordList";
import Button from "./components/UI/Button";
import SearchList from "./components/SearchList/SearchList";
import Header from "./components/Header/Header";
import { Input } from "./components/UI/Input";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(null);

  const passwordCtx = useContext(PasswordContext);
  console.log("app-c", passwordCtx);
  const openModel = (e) => {
    e.preventDefault();
    setIsModelOpen(true);
  };

  const closeModel = (e) => {
    setIsModelOpen(false);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <PasswordProvider>
      <div class="App">
        <Header />
        {isModelOpen && <PasswordModal onClose={closeModel} />}
        <Button onClick={openModel}>Add New Password</Button>
        <div className="form-group">
          <Input
            type="text"
            className="input"
            onChange={searchHandler}
            value={searchInput}
            placeholder="Search in the list"
          />
        </div>
        <h3>Search List</h3>
        <SearchList input={searchInput} />
        <h3>Password List</h3>
        <PasswordList />
      </div>
    </PasswordProvider>
  );
}

export default App;
