import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="navbar">
      <h1>Register</h1>
      <p>You currently have {users.length} user(s) in your List...</p>
    </div>
  );
};

export default Navbar;
