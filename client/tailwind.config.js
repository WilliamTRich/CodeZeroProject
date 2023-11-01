/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // primary: {
                //     DEFAULT: '#5DB2E0',
                //     light: '#9AD5EB',
                //     dark: '#00619E',
                // },
                // secondary: {
                //     DEFAULT: '#6C839E',
                //     light: '#A2B4C7',
                //     dark: '#38424B',
                // },
                // highlight: {
                //     DEFAULT: '#5881AC',
                //     light: '#79A1BD',
                //     dark: '#2A4864',
                // },
                // accent: {
                //     DEFAULT: '#565F7F',
                //     light: '#767F9F',
                //     dark: '#2E3444',
                // },
                // background: {
                //     DEFAULT: '#272635',
                //     light: '#3A3D47',
                //     dark: '#1D1E23',
                // },
                primary: {
                    DEFAULT: '#00A3E0',  // Bright blue
                    light: '#6AD1FF',    // Lighter blue
                    dark: '#005C8B',     // Darker blue
                },
                secondary: {
                    DEFAULT: '#0030bf',  // Brighter dark blue
                    light: '#305ad9',    // Medium blue
                    dark: '#012285',     // Dark blue
                },
                highlight: {
                    DEFAULT: '#4FB1FF',  // Vibrant sky blue
                    light: '#8AD7FF',    // Lighter sky blue
                    dark: '#217AA3',     // Darker sky blue
                },
                accent: {
                    DEFAULT: '#333333',  // Dark gray (adjust as needed)
                    light: '#444444',    // Lighter gray
                    dark: '#222222',     // Darkest gray
                    mediumlight: '#aaaaaa',    // Lighter gray
                    extralight: '#cccccc',    // Lighter gray
                },
                background: {
                    DEFAULT: '#121212',  // Almost black background
                    light: '#1E1E1E',    // Slightly lighter black
                    dark: '#000000',     // Pure black background
                },
            },
        },
    },
    plugins: [],
};
