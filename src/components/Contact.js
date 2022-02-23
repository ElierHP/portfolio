import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"

function Contact() {
  return (
    <Container>
      <Section id="contact">
        <Title
          heading="Get in Touch!"
          subheading="Contact Me"
          align="center"
          marginTop="1.2"
        />
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
