import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import Button from "./Button"
import Container from "./Container"

function Contact() {
  return (
    <Container>
      <Section id="contact">
        <Subtitle>Contact Me</Subtitle>
        <Title>Get in Touch!</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
          maiores odio quas id ducimus quaerat nobis illo fuga est repellendus
          delectus eos debitis expedita non, qui explicabo ab rerum.
        </p>
        <ButtonContainer>
          <Button
            href="mailto:elierporto@gmail.com"
            color={`${theme.colors.primary}`}
          >
            SEND MESSAGE
          </Button>
        </ButtonContainer>
      </Section>
    </Container>
  )
}

//Styles
const Section = styled.section`
  padding-top: ${theme.space[9]}rem;
  padding-bottom: ${theme.space[9]}rem;
  text-align: center;
  margin: auto;
  max-width: 700px;
`

const Title = styled.h2`
  margin-top: 1.2rem;
`

const Subtitle = styled.h4``

const ButtonContainer = styled.div`
  display: block;
  margin: auto;
  width: 70%;
  margin-top: 4rem;
  ${theme.mq()[0]} {
    max-width: 300px;
  }
`

export default Contact
