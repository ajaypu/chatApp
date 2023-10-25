// import express from "express";
// import userLogin from "./routes/login";
const express = require("express");
const bodyParse = require("body-parser");
const userLoginRoute = require("./routes/login");
const messageRoute = require("./routes/message");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      data = "No chats exist";
    }
    res.send(
      `${data}<form action="/" method="POST"  onSubmit="document.getElementById("username").value=localStorage.getItem("username") >
      <input type="text" id="message" name="message" >
      <input id="username" name="username" type="hidden" >
      <button type="submit">Send</button>
      </form>`
    );
  });
});

app.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile(
    "username.txt",
    `${req.body.username}: ${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

app.use(userLoginRoute);
app.use(messageRoute);

app.listen(port, (req, res, next) => {
  console.log(`Server running on port ${port}`);
});
