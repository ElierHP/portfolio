import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import { IoIosArrowDown } from "react-icons/io"

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        {/* Headings */}
        <Heading>
          <Color>Elier</Color> Hernandez
        </Heading>
        <SubHeading>I'm a Full-Stack Web Developer</SubHeading>
      </Wrapper>

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
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 3rem;
`

const Heading = styled.h1`
  margin: 0;
  color: ${theme.colors.light};
  margin-bottom: 2rem;
`

const SubHeading = styled.h2`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.thin};
  color: ${theme.colors.light};
  letter-spacing: 4px;
  margin: 0;
`

const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const IconButton = styled.div`
  position: absolute;
  bottom: 1rem;
  font-size: 4rem;
  margin: auto;
  cursor: pointer;
  color: ${theme.colors.light};
`

export default Hero
