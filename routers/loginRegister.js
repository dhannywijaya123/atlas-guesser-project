"use strict";

const loginRegisterRouter = require("express").Router();

const { ControllerLogin } = require("../controllers");

loginRegisterRouter.post("/login", ControllerLogin.login);
loginRegisterRouter.post("/googleLogin", ControllerLogin.googleLogin);
loginRegisterRouter.post("/register", ControllerLogin.register);

module.exports = { loginRegisterRouter };
