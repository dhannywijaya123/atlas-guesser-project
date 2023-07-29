"use strict";

const router = require("express").Router();

const { loginRegisterRouter } = require("./loginRegister");
const { countryRouter } = require("./country");

router.use("/", loginRegisterRouter);

router.use("/country", countryRouter);

module.exports = router;
