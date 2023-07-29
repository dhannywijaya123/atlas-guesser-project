"use strict";

function parseStringify(data) {
	return data.map((datum) => {
		return JSON.parse(JSON.stringify(datum.dataValues));
	});
}

module.exports = { parseStringify };
