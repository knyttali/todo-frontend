import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export default function AddUser() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { username, password } = user;
  const [signedIn, setSignedIn] = useState(false);

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
      const data = { username, password };
      axios
        .post("http://localhost:8080/user/register", data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          setSignedIn(true);
        })
        .catch((err) => console.log(err));
  };


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="addUser">
          <h1>Register new User</h1>
          <div className="addUserForm">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn viewBtn" type="submit">
            Submit
          </button>
          <button className="btn deleteBtn" type="">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
