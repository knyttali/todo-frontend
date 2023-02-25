import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
import { Navigate } from "react-router-dom";


export default function Item() {
  const [isAuth, setIsAuth] = useState(false);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      Navigate("/login");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const item = { description };
    console.log(item);
    fetch("http://localhost:8080/todo/add", {
      //här använder jag post, skickar in ett item i jsonformat till backend
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      console.log("New item added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/todo/all")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <Container>
      {isAuth && (
        <>
          <h1>To do</h1>
          <TextField
            id="standard-basic"
            label="description"
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn" onClick={handleClick}>
            hello
          </button>
          <h1>Tasks</h1>
          {items.map((item) => (
            <Paper key={item.id}>
              {item.description}
            </Paper>
          ))}
        </>
      )}
    </Container>
  );
}
