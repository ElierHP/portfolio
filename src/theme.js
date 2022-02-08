export default {
  space: [0, 1, 2, 3, 4, 6, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontSizes: [8, 10, 12, 16, 18, 24, 32, 48, 64, 128],
  fontWeights: {
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: "#37bc96",
    secondary: "#F9F1D7",
    light: "#FFFFFF",
    dark: "#3F100B",
    text: "#774644",
    gray: "#eeeeee",
    primaryhover: "#c14108",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map(bp => `@media (max-width: ${bp}px)`)
  },
}
