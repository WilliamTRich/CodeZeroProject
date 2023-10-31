/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5DB2E0',
                    light: '#9AD5EB',
                    dark: '#00619E',
                },
                secondary: {
                    DEFAULT: '#6C839E',
                    light: '#A2B4C7',
                    dark: '#38424B',
                },
                highlight: {
                    DEFAULT: '#5881AC',
                    light: '#79A1BD',
                    dark: '#2A4864',
                },
                accent: {
                    DEFAULT: '#565F7F',
                    light: '#767F9F',
                    dark: '#2E3444',
                },
                background: {
                    DEFAULT: '#272635',
                    light: '#3A3D47',
                    dark: '#1D1E23',
                },
            },
        },
    },
    plugins: [],
};
