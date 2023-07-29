"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Profile extends Model {
		static associate(models) {
			Profile.belongsTo(models.User);
		}
	}
	Profile.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					msg: "Username is already been taken",
				},
				validate: {
					notNull: {
						msg: "Username is required",
					},
					notEmpty: {
						msg: "Username is required",
					},
				},
			},

			membership: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Membership is required",
					},
					notEmpty: {
						msg: "Membership is required",
					},
				},
				defaultValue: "free",
			},

			highScore: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "High score is required",
					},
					notEmpty: {
						msg: "High score is required",
					},
				},
				defaultValue: 0,
			},

			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "UserId is required",
					},
					notEmpty: {
						msg: "UserId is required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Profile",
		}
	);
	return Profile;
};
