"use strict";

const bcrypt = require("bcryptjs");

function hashedPassword(user) {
	const salt = bcrypt.genSaltSync(10);

	const hash = bcrypt.hashSync(user.password, salt);

	user.password = hash;
}

function checkPassword(password) {
	return bcrypt.hashSync(password, 10);
}

module.exports = { hashedPassword, checkPassword };
