"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasOne(models.Profile);
			User.hasMany(models.UserAchievement);
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					msg: "User by this email has already exists",
				},
				validate: {
					notNull: {
						msg: "Email is required",
					},
					notEmpty: {
						msg: "Email is required",
					},
					isEmail: {
						msg: "Invalid email format",
					},
				},
			},

			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Password is required",
					},
					notEmpty: {
						msg: "Password is required",
					},
					len: {
						args: [5, Infinity],
						msg: "Password length minimal 5 characters",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
