const theme = {
  space: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Roboto, sans-serif",
  },
  fontSizes: {
    small: 1.2,
    medium: 1.8,
    large: 2.4,
    mobileHeading: 3.6,
    heading: 4.8,
    largeHeading: 9.6,
  },
  fontWeights: {
    thin: 300,
    body: 400,
    bold: 600,
    bolder: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacing: {
    body: 0.5,
    heading: 2,
  },
  colors: {
    primary: "#16A188",
    primaryLight: "#6CE3CF",
    primaryDark: "#266257",
    secondary: "#F9F1D7",
    light: "#FFFFFF",
    dark: "#212437",
    neutral: "#D9E7E7",
    card: "#373B54",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map(bp => `@media (min-width: ${bp}px)`)
  },
}

export default theme
