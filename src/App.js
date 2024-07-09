import "./App.css";
import React, { useState } from "react";
import PasswordProvider from "./components/Context/PasswordContext";
import PasswordModal from "./components/PasswordModal/AddPasswordModal";
import PasswordList from "./components/PasswordList/PasswordList";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const openModel = (e) => {
    e.preventDefault();
    setIsModelOpen(true);
  };

  const closeModel = (e) => {
    e.preventDefault();
    setIsModelOpen(false);
  };

  return (
    <>
      <PasswordProvider>
        <div className="App">
          <Card>
            <h1>Password-Keeper</h1>
            <h3>Number Of Passwords: {"9"}</h3>
            {isModelOpen && <PasswordModal onClose={closeModel} />}
            <Button onClick={openModel}>Add New Password</Button>
            <PasswordList />
          </Card>
        </div>
      </PasswordProvider>
    </>
  );
}

export default App;
