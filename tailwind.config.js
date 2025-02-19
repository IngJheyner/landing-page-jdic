/** @type {import('tailwindcss').Config} */
import vueform from '@vueform/vueform/tailwind';

export default {

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
        './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
                atomic: ['Atomic', 'cursive'],
            },
            colors: {
                'color-white': '#fdfdfd',
                'color-red': '#de1c60',
                'main-color': '#00004b',
                'second-color': '#081b29',
                'third-color': '#00abf0',
                'color-text': '#333',
                'shadow-color': 'rgba(0, 0, 0, .2)',
            },
        },
        screens: {

            'xs': '390px',
            // => @media (min-width: 390px) { ... }

            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... }
        },
    },
    plugins: [
        vueform,
        function ({ addBase, theme, addComponents }) {
            addBase({
              "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                scrollBehavior: "smooth",
                border: "none",
                outline: "none",
                textDecoration: "none",
              },
              body: {
                background: theme("colors.white"),
              },
              span: {
                color: theme("colors.main-color"),
              },
              p: {
                fontSize: "16px",
              },
              section: {
                overflow: "hidden",
                "scroll-snap-align": "center",
              },
            }),
              addComponents({
                ".heading": {
                  fontSize: "4.5rem",
                  textAlign: "center",
                },
                ".bg-linear-main": {
                  background:
                    "linear-gradient(rgba(0,0,0,.5), theme(colors.second-color))",
                },
              });
        },
    ],
}

