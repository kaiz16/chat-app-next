const Colors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  whitesmoke: "#f8f8f9",
  black: "#000000",
  snow: {
    100: "#fbf6f4",
    200: "#fcf7f5",
    300: "#fcf8f7",
    400: "#fdf9f8",
    500: "#fdfaf9",
  },
  dark: "#000022",
  "oxford-blue": {
    100: "#1a1a38",
    200: "#33334e",
    300: "#4d4d64",
    400: "#66667a",
    500: "#808091",
  },
  red: "#c42847",
  "rusty-red": {
    100: "#ca3e59",
    200: "#d0536c",
    300: "#d6697e",
    400: "#dc7e91",
    500: "#e294a3",
  },
  yellow: "#e28413",
  fulvous: {
    100: "#e5902b",
    200: "#e89d42",
    300: "#eba95a",
    400: "#eeb571",
    500: "#f1c289",
  },
  blue: "#59c3c3",
  "blue-green": {
    100: "#6ac9c9",
    200: "#7acfcf",
    300: "#8bd5d5",
    400: "#9bdbdb",
    500: "#ace1e1",
  },
};

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  options: {
    safelist: [/data-theme$/],
  },
  theme: {
    colors: Colors,
    extend: {
      screens: {
        "2xs": "128px",
        "1.5xs": "256px",
        "1xs": "384px",
        "0.5xs": "512px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
