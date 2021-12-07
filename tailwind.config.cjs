const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {

    extend: {
      colors: {
        lib: {
          light: "#7276aa",
          DEFAULT: "#525788",
          dark: "#464A74"
        }
      },
    },
  },

  plugins: [],
};

module.exports = config;
