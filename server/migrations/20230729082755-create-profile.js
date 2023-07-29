"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Profiles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true,
			},
			membership: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "free",
			},
			highScore: {
				allowNull: false,
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			UserId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Profiles");
	},
};
