/** @type {import('tailwindcss').Config} */

const { easings } = require("postcss-easings");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        screens: {
            '2xl': {'max': '1440px'},
            'xl': {'max': '1200px'},
            'lg': {'max': '992px'},
            'md': {'max': '767px'},
            'sm': {'max': '576px'},
        },
        extend: {
            transitionTimingFunction: { ...easings },
            animation: {
                "fade-out": "fade-out .6s linear .2s 1 forwards",
                "fade-up": "fade-up .6s linear .2s 1 forwards",
            },
            keyframes: {
                "fade-out": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                "fade-up": {
                    "0%": { opacity: 0, transform: "translateY(30px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
        }

    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require("prettier-plugin-tailwindcss"),
    ],
   
}