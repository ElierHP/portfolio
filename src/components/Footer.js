import React from "react"

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", textAlign: "center" }}>
      All rights reserved © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
