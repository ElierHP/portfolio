import React from "react"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import Resume from "../images/resume.pdf"
import "../css/components/about.scss"
import Skills from "./Skills"

function About() {
  return (
    <Container>
      <section id="about">
        <div className="about_wrapper">
          {/* title */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <Title heading="About Me" subheading="Who am I?" />
          </div>

          {/* Descripion */}
          <p data-aos="fade-down" data-aos-duration="1000">
            Full Stack Web Developer currently located in Miami, Florida. My
            interest in the web started back in 2018 as a designer when I
            started creating user interfaces and experiences for the web.
          </p>
          <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            I learned Web Development in order to bring my designs to life, and
            fell in love with it. Now I dedicate myself full time to web
            development, it's one of my great passions.
          </p>

          {/* Skills */}
          <Skills />

          {/* Buttons */}
          <div
            className="about_button-container"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Button color="bg-color_primary" href="#projects">
              PROJECTS
            </Button>
            <a
              className={`button_link bg-color_primary-dark`}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              RESUME/CV
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About
