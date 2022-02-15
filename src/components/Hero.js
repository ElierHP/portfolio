import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import Button from "./Button"
import { IoIosArrowDown } from "react-icons/io"
import CircleImage from "./CircleImage"

const Hero = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      {/* Image */}
      <CircleImage />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled.div`
  margin: auto;
  ${theme.mq()[0]} {
    font-size: ${theme.fontSizes.largeHeading}rem;
    margin: 0;
  }
`

const Heading = styled.h1`
  margin: 0;
  }
`

const SubHeading = styled.h2`
  font-size: ${theme.fontSizes.heading}rem;
  color: ${theme.colors.light};
  letter-spacing: 4px;
  margin: 0;
  ${theme.mq()[1]} {
    font-size: ${theme.fontSizes.largeHeading}rem;
  }
`

const Title = styled.p`
  font-size: ${theme.fontSizes.medium}rem;
  margin: 1rem 0 2rem 0;
  ${theme.mq()[1]} {
    font-size: ${theme.fontSizes.large}rem;
  }
`

const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  ${theme.mq()[0]} {
    flex-direction: row;
    max-width: 300px;
  }
`

const IconButton = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 5rem;
  left: 50%;
  cursor: pointer;
`

export default Hero
