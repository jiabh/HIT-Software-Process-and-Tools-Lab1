module.exports = {
    purge: [
        './src/index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['checked', 'disabled'],
            opacity: ['disabled'],
        },
    },
    plugins: [],
}
