// import express from "express";
const express = require("express");
const router = express.Router();

router.use("/login", (req, res) => {
  res.send(
    "<form action='/' onSubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)'><input type='text' id='username'placeholder='username' name='title'><button type='submit'>Login</button></form>"
  );
});

module.exports = router;
