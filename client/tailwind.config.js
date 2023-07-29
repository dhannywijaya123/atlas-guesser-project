/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.vue"],
	theme: {
		extend: {
			gridTemplateRows: {
				lumayan: "repeat(2, minmax(0, 15rem))",
			},
			fontSize: {
				lumayan: "0.925rem",
				xs2: "0.55rem",
			},
			outlineOffset: {
				lumayan: "-0.65rem",
			},
			transitionDuration: {
				400: "400ms",
			},
			borderWidth: {
				3: "3px",
			},
		},
	},
	plugins: [],
};
