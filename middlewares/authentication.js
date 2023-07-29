"use strict";

const { verifyToken } = require("../helpers");
const { User } = require("../models");

const authentication = async (req, res, next) => {
	try {
		console.log("authentication in progress...");

		const { access_token } = req.headers;

		const payload = verifyToken(access_token);

		const result = await User.findByPk(payload.id);

		req.user = {
			id: result.id,
			username: result.username,
			email: result.email,
			role: result.role,
		};

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authentication };
