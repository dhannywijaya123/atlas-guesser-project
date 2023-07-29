"use strict";

const { OAuth2Client } = require("google-auth-library");
const { User } = require("../models");
const { generateToken, loginValidation } = require("../helpers");

class ControllerLogin {
	// static async login(req, res, next) {
	// 	try {
	// 		const { email, password } = req.body;

	// 		const data = await loginValidation(User, email, password);

	// 		const access_token = generateToken({
	// 			id: data.id,
	// 			username: data.username,
	// 			email: data.email,
	// 			role: data.role,
	// 		});

	// 		res.status(200).json({
	// 			statusCode: 200,
	// 			message: access_token,
	// 			email: data.email,
	// 			role: data.role,
	// 		});
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// }

	// static async googleLogin(req, res, next) {
	// 	try {
	// 		const { google_token } = req.headers;

	// 		const client = new OAuth2Client();

	// 		const ticket = await client.verifyIdToken({
	// 			idToken: google_token,
	// 			audience: process.env.GOOGLE_CLIENT_ID,
	// 		});

	// 		const payload = ticket.getPayload();

	// 		const [user, created] = await User.findOrCreate({
	// 			where: { email: payload.email },
	// 			defaults: {
	// 				email: payload.email,
	// 				password: "google-login",
	// 				role: "Staff",
	// 				username: payload.email.split("@")[0],
	// 			},
	// 			hooks: false,
	// 		});

	// 		const token = generateToken({
	// 			id: user.id,
	// 			username: user.username,
	// 			email: user.email,
	// 			role: user.role,
	// 		});

	// 		res.status(200).json({
	// 			statusCode: 200,
	// 			message: token,
	// 			email: user.email,
	// 			role: user.role,
	// 		});
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// }

	// static async register(req, res, next) {
	// 	try {
	// 		const { email, password, username, phoneNumber, address } =
	// 			req.body;

	// 		const data = await User.create({
	// 			email,
	// 			password,
	// 			username,
	// 			phoneNumber,
	// 			address,
	// 		});

	// 		res.status(201).json({
	// 			statusCode: 201,
	// 			id: data.id,
	// 			email: data.email,
	// 		});
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// }
}

module.exports = { ControllerLogin };
