/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
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
                    medium: '#888888'
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
