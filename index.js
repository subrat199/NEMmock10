const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const {auth}=require("./Middlewere/authMiddleware");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use(auth)
app.get("/", (req, res) => {
  res.send("welcome Home page");
});
app.get("/movie", (req, res) => {
  res.send("Login success for movie")
});
app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log("Not coonect to db");
    console.log(error);
  }
  console.log("Server listening on 8080");
});