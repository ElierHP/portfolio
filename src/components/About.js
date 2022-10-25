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
            My name is Elier Hernandez and I am a Full Stack Web Developer
            currently located in Miami, Florida. Knowledgeable in testing,
            frameworks, debugging, agile principles and TDD. Proficient in an
            assortment of technologies, including Javascript, React, Nextjs,
            Sass, Ruby, Ruby on Rails and Postgresql.
          </p>
          <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Highly team oriented, I believe good communication and teamwork
            yield the best results. Strongly dedicated to producing high quality
            products for clients and end-users. You can download my resume on
            the link below.
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
