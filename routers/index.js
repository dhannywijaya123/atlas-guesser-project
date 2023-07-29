"use strict";

const router = require("express").Router();

const { loginRegisterRouter } = require("./loginRegister");

// const { authentication } = require("../middlewares");

router.use("/", loginRegisterRouter);

// router.use(authentication);

module.exports = router;
