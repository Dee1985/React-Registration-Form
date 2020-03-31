import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import { UserContext } from "../contexts/UserContext";

const UserList = () => {
  const { users } = useContext(UserContext);
  return users.length ? (
    <div className="user-list">
      <ul>
        {users.map(user => {
          return <UserDetails user={user} key={user.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Users</div>
  );
};

export default UserList;
