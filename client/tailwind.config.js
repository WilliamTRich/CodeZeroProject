/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#5DB2E0',
                secondary: '#6C839E',
                highlight: '#5881AC',
                accent: '#565F7F',
                background: '#272635',
            },
        },
    },
    plugins: [],
};
