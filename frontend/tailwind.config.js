/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: "#8B1E1E",
          red: "#C9454D",
          rose: "#D8748B",
          blush: "#E6A5B5",
          mutedRose: "#C98A98",
          teal: "#A9C2C8",
          gold: "#C89B3C",
          bg: "#F7F3F0",
          alt: "#EFE7E2",
          card: "#FFFFFF",
          border: "#E4D8D2",
          heading: "#1F1F1F",
          text: "#4F4A45",
          muted: "#8A817A",
          light: "#FAF7F4"
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(31, 31, 31, 0.06)",
        card: "0 10px 30px rgba(31, 31, 31, 0.05)",
        lift: "0 26px 56px rgba(31, 31, 31, 0.10)"
      },
      borderRadius: {
        premium: "1.5rem"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(31,31,31,0.62) 0%, rgba(31,31,31,0.38) 42%, rgba(31,31,31,0.12) 100%)",
        "section-wash": "radial-gradient(circle at top left, rgba(216,116,139,0.12), transparent 42%), radial-gradient(circle at bottom right, rgba(169,194,200,0.12), transparent 38%)"
      },
      maxWidth: {
        content: "1180px"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};
