/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                "primary-orange": "#FF5722",
            },
        },
    },
    plugins: [require("daisyui")],
};
