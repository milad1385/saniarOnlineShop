/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1470px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
      },
      boxShadow: {
        blue: "0 5px 5px #407bff31",
        gray: " 0 .125rem .25rem rgba(0,0,0,.075)",
        pink: "0 5px 5px #fbcfe8",
        yellow: "0 0px 5px #FFA41B",
      },
    },
    fontFamily: {
      Dana: "Dana",
      DanaMedium: "Dana Medium",
      DanaDemiBold: "Dana DemiBold",
      MorabbaLight: "Morabba Light",
      MorabbaMedium: "Morabba Medium",
      MorabbaBold: "Morabba Bold",
      Lalezar : "Lalezar"
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
