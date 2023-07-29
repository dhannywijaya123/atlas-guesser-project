"use strict";

const countryRouter = require("express").Router();

const { ControllerCountry } = require("../controllers");

countryRouter.get("/random", ControllerCountry.randomCountry);

module.exports = { countryRouter };
