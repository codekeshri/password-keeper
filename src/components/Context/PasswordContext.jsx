// In this componenet which is context API first ll create context and provide it.
import { createContext } from "react";

const PasswordContext = createContext({
  passwords: [],
  addPassword: (password) => {},
  filteredData: [],
  editPassword: (password) => {},
  deletePassword: (password) => {},
});

export default PasswordContext;
