"use strict";

const bcrypt = require("bcryptjs");

function hashedPassword(password) {
	return bcrypt.hashSync(password, 10);
}

function checkPassword(password, passwordFromDb) {
	return bcrypt.compareSync(password, passwordFromDb);
}

module.exports = { hashedPassword, checkPassword };
