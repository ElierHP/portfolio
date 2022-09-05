import React from "react"
import { IoIosArrowDown } from "react-icons/io"
import "aos/dist/aos.css"
import "../css/components/hero.scss"

const Hero = () => {
  return (
    <section id="home">
      <div className="hero_container">
        {/* Headings */}
        <h1
          className="hero_heading"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="color_primary-light">Elier</span> Hernandez
        </h1>
        <h2
          className="hero_sub-heading"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Full-Stack Web Developer
        </h2>
      </div>

      {/* Arrow Icon */}
      <a
        className="hero_icon-button"
        href="#about"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <IoIosArrowDown />
      </a>
    </section>
  )
}

export default Hero
