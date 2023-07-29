"use strict";

const errorHandler = (err, req, res, next) => {
	console.log(err, "this console.log is located on errorHandler");

	let statusCode;
	let message;

	switch (err.name) {
		// 400 GANG
		case "SequelizeValidationError":
			statusCode = 400;
			message = err.errors[0].message;
			break;
		case "SequelizeUniqueConstraintError":
			statusCode = 400;
			message = "Email has already been used";
			break;
		case "NoEmail":
			statusCode = 400;
			message = "Email must be provided";
			break;
		case "NoPassword":
			statusCode = 400;
			message = "Password must be provided";
			break;
		case "NoEmailInput":
			statusCode = 400;
			message = "There must be an email input";
			break;
		case "NoPasswordInput":
			statusCode = 400;
			message = "There must be a password input";
			break;
		case "CustomBadRequestError":
			statusCode = 400;
			message = err.message;
			break;

		// 401 GANG
		case "InvalidLogin":
			statusCode = 401;
			message = "Invalid email or password";
			break;
		case "LoginFirst":
			statusCode = 401;
			message = "Login first to access this feature";
			break;
		case "JsonWebTokenError":
			statusCode = 401;
			message = "Invalid Token";
			break;
		case "TokenExpiredError":
			statusCode = 401;
			message = "Login token expired, please login again to continue";
			break;

            // 403 GANG
		case "NotAuthorized":
			statusCode = 403;
			message = "Not authorized to access this feature";
			break;

            // 404 GANG
		case "CuisineNotFound":
			statusCode = 404;
			message = "Cuisine not found";
			break;
		case "CategoryNotFound":
			statusCode = 404;
			message = "Category not found";
			break;

        // 500 GANG
		default:
			statusCode = 500;
			message = "Internal Server Error";
			break;
	}

	res.status(statusCode).json({ message });
};

module.exports = { errorHandler };
