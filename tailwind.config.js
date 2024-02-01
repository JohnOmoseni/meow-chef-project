/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				body: "#fffaea",
				"br-clr": "#7562f2",
			},
			boxShadow: {
				100: "0px 2px 5px rgba(0,0,0, 0.3)",
				200: "1px 2px 8px -2px rgba(0,0,0, 0.5)",
			},
			borderRadius: {
				sm: "3px",
			},
			fontFamily: {
				variant: ["Lacquer", "Arial", "sans-serif"],
				regular: ["Kinn", "Arial", "sans-serif"],
			},
			fontSize: {
				sm: ["0.8rem", { lineHeight: "1.3" }],
				base: ["0.9rem", { lineHeight: "1.4" }],
				subtitle: ["clamp(3rem, 3vw + 1rem, 60px) ", { lineHeight: "1.2" }],
				secondary: ["clamp(48px, 5vw + 1rem, 80px) ", { lineHeight: "1.2" }],
				primary: ["clamp(55px, 10vw + 1rem, 120px)", { lineHeight: "1.2" }],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".h-100dvh": {
					height: "100dvh",
				},
				".transition-sm": {
					transition: "all 0.3s linear",
				},
				".clip-circle": {
					clipPath: "circle()",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
