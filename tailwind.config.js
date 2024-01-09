module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.svg", "./src/assets/js/*.js"],
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "#18204e",
      },
      maxWidth: {
        article: "65ch",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "normal",
              color: theme("colors.slate.600"),
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            a: {
              color: "#2b74b9",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
