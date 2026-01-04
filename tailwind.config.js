/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
    colors: {
      heading: "#303030",
      paragraphs: "#3d3d3d",
      lightBlue: "#43add4",
      darkBlue: "#204890",
      secBg: "#f7fcff",
    },
  },
  plugins: [],
};
