"use strict";

const loginRegisterRouter = require("express").Router();

const { ControllerLogin } = require("../controllers");

loginRegisterRouter.post("/register", ControllerLogin.register);
loginRegisterRouter.post("/login", ControllerLogin.login);

module.exports = { loginRegisterRouter };
