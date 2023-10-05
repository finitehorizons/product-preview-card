/** @type {import('tailwindcss').Config} */


export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "button-text": "#000000",
                "card-bg": "hsl(30, 38%, 92%)",
                "green-default": "hsl(158, 36%, 37%)",
                "button-hover-bg": "hsl(158, 36%, 15%)",
                "flavor-text": "hsl(228, 12%, 48%)",
                "product-title": "hsl(212, 21%, 14%)",
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                Fraunces: ["Fraunces", "sans-serif"],
            },
        },
        plugins: [],
    },
};
