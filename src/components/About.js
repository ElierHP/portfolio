import React from "react"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import Resume from "../images/Elier_H_Portfolio.pdf"
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
            Hello! My name is Elier and I enjoy creating things that live on the
            internet. My interest in the web started back in 2019 as a designer,
            creating user interfaces and experiences for the web. I learned Web
            Development in order to bring my designs to life, and fell in love
            with it.
          </p>
          <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a video game studio, and the opportunity of
            giving multiple business a presence on the web.
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
