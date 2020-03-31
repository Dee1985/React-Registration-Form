import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const NewUserForm = () => {
  const { dispatch } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      user: { userName, email, password, password2 }
    });
    setUserName("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="user-list">
        <label for="username">User Name</label>
        <input
          type="text"
          value={userName}
          placeholder="Enter username"
          onChange={e => setUserName(e.target.value)}
        />
        <small>Error message</small>
      </div>
      <div className="user-list">
        <label for="email">Email</label>
        <input
          type="text"
          value={email}
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="user-list">
        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={e => setPassword(e.target.value)}
        />
        <small>Error message</small>
      </div>
      <div className="user-list">
        <label for="password2">Confirm Password</label>
        <input
          type="password"
          value={password2}
          placeholder="Enter password again"
          onChange={e => setPassword2(e.target.value)}
        />
        <small>Error message</small>
      </div>
      <input type="submit" value="Add User" />
    </form>
  );
};
export default NewUserForm;
