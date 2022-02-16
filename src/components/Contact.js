import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import Button from "./Button"

function Contact() {
  return (
    <Container>
      <Title>Get in Touch!</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
        maiores odio quas id ducimus quaerat nobis illo fuga est repellendus
        delectus eos debitis expedita non, qui explicabo ab rerum.
      </p>
      <ButtonContainer href="mailto:elierporto@gmail.com">
        <Button color={`${theme.colors.primary}`}>SEND MESSAGE</Button>
      </ButtonContainer>
    </Container>
  )
}

//Styles
const Container = styled.div`
  padding-top: ${theme.space[9]}rem;
  padding-bottom: ${theme.space[9]}rem;
  text-align: center;
  margin: auto;
  max-width: 700px;
`

const Title = styled.h2`
  margin-top: 0;
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
