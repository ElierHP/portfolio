import React from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { RiGatsbyFill } from "react-icons/ri"
import { SiMaterialui } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import Resume from "../images/resume.pdf"
import "../css/components/about.scss"

function About() {
  return (
    <Container>
      <section id="about">
        <div className="about_wrapper">
          <div data-aos="fade-right" data-aos-duration="1000">
            <Title heading="About Me" subheading="Who am I?" />
          </div>
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
          <div className="about_skills">
            <h3
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Skills
            </h3>
            {/* Icons */}
            <div className="about_icon-container">
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <p className="about_icon-title">html5</p>
                <AiFillHtml5 />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <p className="about_icon-title">css3</p>
                <DiCss3 />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <p className="about_icon-title">js es6+</p>
                <IoLogoJavascript />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <p className="about_icon-title">react</p>
                <FaReact />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <p className="about_icon-title">node</p>
                <IoLogoNodejs />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="450"
              >
                <p className="about_icon-title">gatsby</p>
                <RiGatsbyFill />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <p className="about_icon-title">mui</p>
                <SiMaterialui />
              </div>
              <div
                className="about_icon-button"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="550"
              >
                <p className="about_icon-title">mongo</p>
                <SiMongodb />
              </div>
            </div>
          </div>
          <div
            className="about_button-container"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Button color="bg-color_primary" href="#projects">
              PROJECTS
            </Button>
            <Button color="bg-color_primary-dark" href={Resume}>
              RESUME/CV
            </Button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About
