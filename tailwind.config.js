/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        jost: ["jost", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./assets/images/webp/hero-bg.webp)",
        cloud:"url(./assets/images/webp/footer-clouds.webp)",
        foot:"url(./assets/images/webp/footer-bg.webp)"
      },
      colors: {
        blue: "#0055D62E",
        'dark-blue':"#0F2338",
        "rich-black": "#1B2024",
        grey: "#636A78",
        sky: "#55C6F0",
        'light-blue':"#EBFBFF",
        'dark-grey':"#505658",
        'bolt-blue':"#01B3F8",
        'fade-blue':"#2092EB",
        "rich-blue":"#2194E8",
        "light-grey":"#D8E0E3",
        "light-black":"#C9CBCB",
        'fade-grey':"#707283",
        "off-white":"#FBFEFE"
      },
      lineHeight: {
        120:"120%",
        121:"121%",
        126:"126%",
        130: "130%",
        143: "143%",
        144:"144%",
        146: "146%",
        155:"155%",
        160:"160%",
      },
      fontSize:{
        'custom-3xl':"34px",
        'custom-4xl':"40px",
        'custom-5xl':"50px",
        'custom-6xl':"65px",
      },
      screens:{
        xs:"425px",
        "custom-lg":"970px",
        "custom-xl":"1200px",
        "custom-2xl":"1400px",
        "3xl":"1700px",
      },
      boxShadow:{
        box:"0px 20px 70px 0px #2630640D",
      }
    },
  },
  plugins: [],
};
