export default {
  space: [0, 1, 2, 3, 4, 6, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontSizes: {
    small: 12,
    medium: 18,
    large: 24,
    heading: 48,
    largeHeading: 96,
  },
  fontWeights: {
    thin: 300,
    body: 400,
    bold: 600,
    bolder: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacing: [0, 1, 2, 3],
  colors: {
    primary: "#16A188",
    primaryLight: "#6CE3CF",
    primaryDark: "#266257",
    secondary: "#F9F1D7",
    light: "#FFFFFF",
    dark: "#212437",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map(bp => `@media (max-width: ${bp}px)`)
  },
}
