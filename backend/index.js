const express = require("express");
const userModel = require("./db");

const jwt = require("jsonwebtoken");
const { signup, login } = require("./types");

const app = express();
app.use(express.json());
app.post("/signup", (req, res) => {
  const body = req.body;
  const parsed = signup.parse(body);
  if (parsed) {
    const user = new userModel(body);
    user.save();
    const token = jwt.sign({ email: body.email }, "secret");
    res.send(token);
  } else {
    res.send("invalid data");
  }
});
app.post("/signin", (req, res) => {
  const body = req.body;
  const parsed = login.parse(body);
  if (parsed) {
    userModel.findOne({ email: body.email }).then((data) => {
      if (data.password === body.password) {
        const token = jwt.sign({ email: body.email }, "secret");
        res.send(token);
      } else {
        res.send("invalid password");
      }
    });
  } else {
    res.send("invalid data");
  }
});
app.listen(3000, () => {
  console.log("server has started ");
});
