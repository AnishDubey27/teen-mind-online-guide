
export const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0", opacity: "0" },
      to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
      to: { height: "0", opacity: "0" },
    },
    "fade-in": {
      "0%": {
        opacity: "0",
        transform: "translateY(10px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "scale-in": {
      "0%": {
        transform: "scale(0.95)",
        opacity: "0",
      },
      "100%": {
        transform: "scale(1)",
        opacity: "1",
      },
    },
    "enter": {
      "0%": {
        opacity: "0",
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "slide-in-right": {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(0)" },
    },
    "bounce-slow": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-10px)",
      },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "fade-in": "fade-in 0.5s ease-out forwards",
    "scale-in": "scale-in 0.5s ease-out forwards",
    "enter": "enter 0.6s ease-out forwards",
    "slide-in-right": "slide-in-right 0.5s ease-out",
    "bounce-slow": "bounce-slow 3s ease-in-out infinite",
  },
};
