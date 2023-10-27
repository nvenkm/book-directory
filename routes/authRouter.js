const express = require("express");
const {
  handleUserRegister,
  handleUserLogin,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", handleUserRegister);

authRouter.post("/login", handleUserLogin);

module.exports = authRouter;
