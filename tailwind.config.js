/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#0A192F",
					light: "#64FFDA",
					dark: "#112240",
				},
				secondary: {
					DEFAULT: "rgb(159, 217, 23)",
					light: "rgb(58, 178, 66)",
				},
				grey: {
					light: "#8892B0",
					lighter: "#CCD6F6",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
