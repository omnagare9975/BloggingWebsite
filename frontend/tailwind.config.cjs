module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-dark-900",
    "bg-primary-600",
    "text-gray-100",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#111111',
        },
        primary: {
          600: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}
