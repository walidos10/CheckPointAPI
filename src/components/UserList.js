import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setusers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(users);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {users.map((el, i) => (
        <User el={el} key={i} />
      ))}
    </div>
  );
};

export default UserList;
