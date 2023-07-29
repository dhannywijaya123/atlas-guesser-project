"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Achievement extends Model {
		static associate(models) {
			Achievement.hasMany(models.UserAchievement);
		}
	}
	Achievement.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Name is required",
					},
					notEmpty: {
						msg: "Name is required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Achievement",
		}
	);
	return Achievement;
};
