const express = require("express");
const data = require("./data");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    `<form action="/" onSubmit="document.getElementById("username").value=localStorage.getItem("username") method="POST" >
    <input type="text" id="message" name="message" placeholder="message...">
    <input id="username" name="username" type="hidden" >
    <button type="submit">Send</button>
    </form>`
  );
});

router.post("/", (req, res, next) => {
  data.push(`{${req.body.username}:${req.body.message}}`);
  console.log(data);
  console.log(`${req.body.username}:${req.body.message}`);
  res.redirect();
});

module.exports = router;
