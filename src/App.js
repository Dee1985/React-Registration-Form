import React from "react";
import UserContextProvider from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import NewUserForm from "./components/NewUserForm";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <UserList />
        <NewUserForm />
      </UserContextProvider>
    </div>
  );
}

export default App;
