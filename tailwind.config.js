module.exports = {
    content: [
        "./index.html",      // must include index.html at root
        "./src/**/*.{js,jsx,ts,tsx}"  // include all React components
    ],
    theme: {
        extend: {
            colors: {
                terminalGreen: "#00ff88",
                terminalBlack: "#000000",
                terminalDark: "#0d2608",
            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
            },
            keyframes: {
                terminalBlink: {
                    "0%,50%": { opacity: "1" },
                    "51%,100%": { opacity: "0" },
                },
                typing: {
                    "0%": { width: "0" },
                    "100%": { width: "100%" },
                },
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                terminalBlink: "terminalBlink 1s infinite",
                typing: "typing 2s steps(40,end)",
                fadeIn: "fadeIn 0.5s ease forwards",
            },
        },
    },
    plugins: [],
};