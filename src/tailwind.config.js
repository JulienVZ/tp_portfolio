/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-yellow': '#FDC435',
                'brand-dark': '#25282B',
                'brand-gray': '#828282',
            },
            fontFamily: {
                sans: ['Nunito'],
                serif: ['Poppins', 'Playfair Display'],
            }
        },
    },
    plugins: [],
}