/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "bold-title": "2.13rem",
      "big-title": "2.13rem",
      title1: "1.75rem",
      title2: "1.38rem",
      title3: "1.25rem",
      headline: "1.06rem",
      body: "1.06rem",
      call: "1rem",
      subtitle: "0.94rem",
      footer: "0.81rem",
      legend1: "0.75rem",
      legend2: "0.69rem",
    },
    fontFamily: {
      title: ["Roboto", "sans-serif"],
      general: ["Source Sans Pro", "sans-serif"],
    },
    fontWeight: {
      bold: "700",
      semibold: "600",
      normal: "400",
    },
    lineHeight: {
      "lh-1": "13px",
      "lh-2": "16px",
      "lh-3": "18px",
      "lh-4": "20px",
      "lh-5": "21px",
      "lh-6": "22px",
      "lh-7": "25px",
      "lh-8": "28px",
      "lh-9": "34px",
      "lh-10": "41px",
    },
    extend: {
      colors: {
        primary: {
          dye: "#B5E3CA",
          lighter: "#42B377",
          light: "#339963",
          base: "#379563",
          dark: "#2C774F",
          darker: "#205639",
        },
        secondary: {
          dye: "#FFC3AD",
          lighter: "#FF8C62",
          light: "#FF7B4C",
          base: "#FF5A1F",
          dark: "#CC4819",
          darker: "#B33F16",
        },
        neutral: {
          light: "#FCFCFC",
          dark: "#2C2C2C",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}
