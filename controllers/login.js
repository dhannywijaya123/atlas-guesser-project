"use strict";

const { OAuth2Client } = require("google-auth-library");

const { User, Profile } = require("../models");
const { generateToken, hashedPassword, checkPassword } = require("../helpers");

class ControllerLogin {
	static async register(req, res, next) {
		try {
			let { email, password, username } = req.body;

			const errors = [];

			if (!email) {
				errors.push("Email must be provided");
			} else {
				const checkEmail = await User.findOne({ where: { email } });
				if (checkEmail) {
					errors.push("Email has already been used");
				}
			}

			if (!password) {
				errors.push("Password must be provided");
			} else {
				if (password.length < 5) {
					errors.push("Password length minimal 5 characters");
				}
			}

			if (!username) {
				errors.push("Username must be provided");
			} else {
				const checkUsername = await Profile.findOne({
					where: { username },
				});
				if (checkUsername) {
					errors.push("Username has already been used");
				}
			}

			if (errors.length) {
				throw { name: "CustomBadRequestError", message: errors };
			}

			password = hashedPassword(password);

			const user = await User.create({ email, password });

			const UserId = user.id;

			const profile = await Profile.create({ username, UserId });

			res.status(201).json({
				id: user.id,
				email: user.email,
				username: profile.username,
			});
		} catch (err) {
			next(err);
		}
	}

	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			const errors = [];

			if (!email) {
				errors.push("Email must be provided");
			}

			if (!password) {
				errors.push("Password must be provided");
			}

			if (errors.length) {
				throw { name: "CustomBadRequestError", message: errors };
			}

			const user = await User.findOne({ where: { email } });

			if (!user) {
				throw { name: "InvalidLogin" };
			}

			if (!checkPassword(password, user.password)) {
				throw { name: "InvalidLogin" };
			}

			const access_token = generateToken({
				id: user.id,
				email: user.email,
			});

			res.status(200).json({
				access_token,
			});
		} catch (err) {
			next(err);
		}
	}

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
}

module.exports = { ControllerLogin };
