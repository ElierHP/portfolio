import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import Button from "./Button"
import { IoIosArrowDown } from "react-icons/io"

const Hero = () => {
  return (
    <Container>
      {/* Headings */}
      <Heading>
        <Color>Hi!</Color> I'm Elier
      </Heading>
      <SubHeading>Hernandez</SubHeading>
      <Title>Full-Stack Web Developer</Title>

      {/* Buttons */}
      <BtnContainer>
        <Button color={theme.colors.primary}>PROJECTS</Button>
        <Button color={theme.colors.primaryDark}>RESUME</Button>
      </BtnContainer>

      {/* Image */}
      <Circle />

      {/* Arrow Icon */}
      <IconButton>
        <IoIosArrowDown />
      </IconButton>
    </Container>
  )
}

//Styles
const Container = styled.div`
  min-height: calc(100vh - 67.26px);
  position: relative;
`

const Heading = styled.h1`
  padding-top: 10rem;
  font-size: ${theme.fontSizes.largeHeading}rem;
  margin: 0;
`

const SubHeading = styled.h2`
  font-size: ${theme.fontSizes.largeHeading}rem;
  letter-spacing: 4px;
  margin: 0;
`

const Title = styled.p`
  font-size: ${theme.fontSizes.large}rem;
  margin: 1rem 0 2rem 0;
`

const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const BtnContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
`

const IconButton = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 5rem;
  left: 50%;
  cursor: pointer;
`

const Circle = styled.div`
  position: absolute;
  background-color: ${theme.colors.primaryLight};
  border-radius: 50%;
  height: 500px;
  width: 500px;
  top: 3rem;
  right: 0;
  opacity: 0.8;
`
export default Hero
