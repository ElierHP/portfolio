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

function About() {
  return (
    <Container>
      <Section id="about">
        <Wrapper>
          <SubTitle>Who am I?</SubTitle>
          <Title>About Me</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos,
            praesentium, alias voluptate magnam assumenda quia ipsum
            perspiciatis enim atque quod amet laboriosam qui quidem fugit sit
            nemo vel vero tenetur corrupti quam, numquam fugiat. Aperiam
            voluptas quidem repellat dolorem perferendis ut facilis et aliquam
            praesentium sit minima, eum saepe?
          </p>
          <Skills>
            <h3>Skills</h3>
            {/* Icons */}
            <IconContainer>
              <IconButton>
                <IconTitle>html5</IconTitle>
                <AiFillHtml5 />
              </IconButton>
              <IconButton>
                <IconTitle>css3</IconTitle>
                <DiCss3 />
              </IconButton>
              <IconButton>
                <IconTitle>js es6+</IconTitle>
                <IoLogoJavascript />
              </IconButton>
              <IconButton>
                <IconTitle>react</IconTitle>
                <FaReact />
              </IconButton>
              <IconButton>
                <IconTitle>node</IconTitle>
                <IoLogoNodejs />
              </IconButton>
              <IconButton>
                <IconTitle>gatsby</IconTitle>
                <RiGatsbyFill />
              </IconButton>
              <IconButton>
                <IconTitle>mui</IconTitle>
                <SiMaterialui />
              </IconButton>
              <IconButton>
                <IconTitle>mongo</IconTitle>
                <SiMongodb />
              </IconButton>
            </IconContainer>
          </Skills>
          <ButtonContainer>
            <Button color={theme.colors.primary}>PROJECTS</Button>
            <Button color={theme.colors.primaryDark}>CONTACT</Button>
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

const Title = styled.h2`
  margin-top: 1.5rem;
`

const SubTitle = styled.h4`
  margin-left: 0.5rem;
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
