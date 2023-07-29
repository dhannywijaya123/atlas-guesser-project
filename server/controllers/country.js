"use strict";

const axios = require("axios");

const { randomNumber } = require("../helpers");

class ControllerCountry {
	static async randomCountry(req, res, next) {
		try {
            const response = await axios.get(process.env.REST_COUNTRIES_BASE_URL);

            const data = response.data;

            const country = data[randomNumber(data)]

			res.status(200).json(country);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = { ControllerCountry };
