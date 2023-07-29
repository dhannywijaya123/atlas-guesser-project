"use strict";

const bcryptjs = require("bcryptjs");

async function loginValidation(user, email, password) {
    try {
        const data = await user.findOne({ where: { email } });

        if (!data) {
            throw { name: "InvalidLogin" };
        }

        const isValidPassword = bcryptjs.compareSync(password, data.password);

        if (!isValidPassword) {
            throw { name: "InvalidLogin" };
        }

        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = { loginValidation };
