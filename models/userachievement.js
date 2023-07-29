"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class UserAchievement extends Model {
		static associate(models) {
			UserAchievement.belongsTo(models.User);
			UserAchievement.belongsTo(models.Achievement);
		}
	}
	UserAchievement.init(
		{
			AchievementId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "AchievementId is required",
					},
					notEmpty: {
						msg: "AchievementId is required",
					},
				},
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
			modelName: "UserAchievement",
		}
	);
	return UserAchievement;
};
