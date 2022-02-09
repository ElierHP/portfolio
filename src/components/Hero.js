import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import Button from "./Button"

const Hero = () => {
  return (
    <Container>
      {/* Headings */}
      <Heading>
        <Color>Hi!</Color> I'm Elier
      </Heading>
      <SubHeading>Hernandez</SubHeading>
      <p>Full-Stack Web Developer</p>

      {/* Buttons */}
      <BtnContainer>
        <Button color={theme.colors.primary}>PROJECTS</Button>
        <Button color={theme.colors.primaryDark}>RESUME</Button>
      </BtnContainer>
      <Circle />
    </Container>
  )
}

//Styles
const Container = styled.div`
  padding-top: 5rem;
`

const Heading = styled.h1`
  font-size: ${theme.fontSizes.largeHeading}rem;
  margin: 0;
`

const SubHeading = styled.h2`
  font-size: ${theme.fontSizes.largeHeading}rem;
  margin: 0;
`
const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const BtnContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
`

const Circle = styled.div`
  position: absolute;
  background-color: ${theme.colors.primaryLight};
  border-radius: 50%;
  height: 500px;
  width: 500px;
  top: 7rem;
  right: 10rem;
  opacity: 0.8;
`
export default Hero
