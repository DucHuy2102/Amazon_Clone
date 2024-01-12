/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                amazonclone: {
                    amazon_background: '#eaeded',
                    amazon_light_blue: '#232f3a',
                    amazon_yellow: '#febd69',
                    amazon_default: '#131921',
                },
            },
        },
    },
    plugins: [],
};
