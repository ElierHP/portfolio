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
import Current from "../images/nature3.svg"

function About() {
  return (
    <Container id="about">
      <Wrapper>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos,
          praesentium, alias voluptate magnam assumenda quia ipsum perspiciatis
          enim atque quod amet laboriosam qui quidem fugit sit nemo vel vero
          tenetur corrupti quam, numquam fugiat. Aperiam voluptas quidem
          repellat dolorem perferendis ut facilis et aliquam praesentium sit
          minima, eum saepe?
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
          </IconContainer>
          <IconContainer>
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
      <Image src={Current} />
    </Container>
  )
}

const Container = styled.section`
  padding-top: ${theme.space[8]}rem;
  padding-bottom: ${theme.space[8]}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  grid-gap: 2rem;
  ${theme.mq()[2]} {
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  max-width: 50ch;
`

const Image = styled.img`
  margin-bottom: 2rem;
  width: 250px;
  height: 250px;
  ${theme.mq()[1]} {
    margin-bottom: 4rem;
    width: 350px;
    height: 350px;
    margin-top: 4rem;
  }
  ${theme.mq()[2]} {
    width: 500px;
    height: 500px;
    margin-bottom: 0;
  }
`

const Skills = styled.div`
  margin-left: 0;
  ${theme.mq()[1]} {
    margin-left: 15rem;
  }
`

const IconContainer = styled.div`
  display: flex;
  grid-gap: 3rem;
`

const IconTitle = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.small}rem;
  text-align: center;
  margin-bottom: -0.5rem;
`

const IconButton = styled.div`
  display: inline-block;
  font-size: 5rem;
  text-align: center;
`

const ButtonContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
  ${theme.mq()[0]} {
    flex-direction: row;
    max-width: 300px;
  }
`

export default About
