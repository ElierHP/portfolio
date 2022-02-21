import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import { IoIosArrowDown } from "react-icons/io"

const Hero = () => {
  return (
    <Section>
      <Wrapper>
        {/* Headings */}
        <Heading>
          <Color>Elier</Color> Hernandez
        </Heading>
        <SubHeading>
          <OptionalText>I'm a </OptionalText>Full-Stack Web Developer
        </SubHeading>
      </Wrapper>

      {/* Arrow Icon */}
      <IconButton href="#about">
        <IoIosArrowDown />
      </IconButton>
    </Section>
  )
}

//Styles
const Section = styled.section`
  min-height: calc(100vh - 96.86px);
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
  font-size: ${theme.fontSizes.medium}rem;
  font-weight: ${theme.fontWeights.thin};
  color: ${theme.colors.light};
  letter-spacing: 1px;
  margin: 0;
  ${theme.mq()[1]} {
    font-size: ${theme.fontSizes.large}rem;
    letter-spacing: 4px;
  }
`

const OptionalText = styled.span`
  display: none;
  ${theme.mq()[1]} {
    display: inline;
  }
`

const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const IconButton = styled.a`
  position: absolute;
  bottom: 3.5rem;
  font-size: 4rem;
  margin: auto;
  cursor: pointer;
  color: ${theme.colors.light};
`

export default Hero
