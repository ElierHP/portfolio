import React from "react"
import "aos/dist/aos.css"
import "../css/components/footer.scss"

const Footer = () => {
  return (
    <footer className="footer_main">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="0">
        All rights reserved © {new Date().getFullYear()}, Built with Gatsby.
      </div>
    </footer>
  )
}

export default Footer
