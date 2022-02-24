import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import { IoIosArrowDown } from "react-icons/io"
import "aos/dist/aos.css"

const Hero = () => {
  return (
    <Section id="home">
      <Wrapper>
        {/* Headings */}
        <Heading data-aos="fade-down" data-aos-duration="1000">
          <Color>Elier</Color> Hernandez
        </Heading>
        <SubHeading
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Full-Stack Web Developer
        </SubHeading>
      </Wrapper>

      {/* Arrow Icon */}
      <IconButton
        href="#about"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <IoIosArrowDown />
      </IconButton>
    </Section>
  )
}

//Styles
const Section = styled.section`
  min-height: 100vh;
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
  margin-bottom: 1rem;
  ${theme.mq()[1]} {
    margin-bottom: 2rem;
  }
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

const Color = styled.span`
  color: ${theme.colors.primaryLight};
`

const IconButton = styled.a`
  position: absolute;
  bottom: 3rem;
  font-size: 4rem;
  margin: auto;
  cursor: pointer;
  color: ${theme.colors.light};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${theme.colors.secondary};
  }
`

export default Hero
