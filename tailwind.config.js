module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-img":
          "url('https://raw.githubusercontent.com/mattrbanks/temp-images-repo/5848e09072dbae54a9583ecbecb9d4f721fbbfb2/kaseyheaderfigmaps.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
