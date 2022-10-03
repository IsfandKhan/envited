/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-purple': '#240d57',
      'primary-purple-1': '#501fc1',
      'primary-purple-2': '#8456ec',
      'primary-purple-3': '#e87bf8',
      'secondary-purple-1': '#ccb6ff',
      'secondary-purple-2': '#ede5ff',
      'secondary-purple-3': '#f6f2ff',
      'alert-color-pink': '#ffd7e0',
      'alert-color-red': '#E61445',
      'alert-color-lime': '#D3FFE2',
      'alert-color-green': '#00805E',
    },
  },
  plugins: [],
}