import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
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

function About() {
  return (
    <Container>
      <Section id="about">
        <Wrapper>
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
          <Skills>
            <h3
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Skills
            </h3>
            {/* Icons */}
            <IconContainer>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <IconTitle>html5</IconTitle>
                <AiFillHtml5 />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <IconTitle>css3</IconTitle>
                <DiCss3 />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <IconTitle>js es6+</IconTitle>
                <IoLogoJavascript />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <IconTitle>react</IconTitle>
                <FaReact />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <IconTitle>node</IconTitle>
                <IoLogoNodejs />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="450"
              >
                <IconTitle>gatsby</IconTitle>
                <RiGatsbyFill />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <IconTitle>mui</IconTitle>
                <SiMaterialui />
              </IconButton>
              <IconButton
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="550"
              >
                <IconTitle>mongo</IconTitle>
                <SiMongodb />
              </IconButton>
            </IconContainer>
          </Skills>
          <ButtonContainer
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Button color={theme.colors.primary} href="#projects">
              PROJECTS
            </Button>
            <Button color={theme.colors.primaryDark} href="#contact">
              CONTACT
            </Button>
          </ButtonContainer>
        </Wrapper>
      </Section>
    </Container>
  )
}

const Section = styled.section`
  padding-top: ${theme.space[9]}rem;
  padding-bottom: ${theme.space[8]}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  grid-gap: 2rem;
  position: relative;
  ${theme.mq()[2]} {
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  width: 90%;
`

const Skills = styled.div`
  margin-top: 5rem;
`

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  ${theme.mq()[1]} {
    grid-gap: 0;
    grid-template-columns: repeat(10, 1fr);
    justify-items: left;
  }
`

const IconTitle = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.small}rem;
`

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 5rem;
  color: ${theme.colors.body};
`

const ButtonContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
  margin-top: 3rem;
  ${theme.mq()[0]} {
    flex-direction: row;
    max-width: 300px;
  }
`

export default About
