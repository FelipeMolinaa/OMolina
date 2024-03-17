/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontFamily: {
            'roboto-mono': ['Roboto Mono', 'sans-serif'],
            'anta': ['Anta', 'sans-serif'],
        },
        colors: {
            'fundo': "#F2F4FB",
            'texto': "#050710",
            'primario': "#4255C3",
            'secundario': "#B39CDF",
            'sotaque': "#A572D2",

        },
        extend: {},
    },
    plugins: [],
}