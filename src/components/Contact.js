import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"

function Contact() {
  return (
    <Container>
      <Section id="contact">
        <div data-aos="fade-down" data-aos-duration="1000">
          <Title
            heading="Get in Touch!"
            subheading="Contact Me"
            align="center"
            marginTop="1.2"
          />
        </div>
        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
          If you're interested in working with me, feel free to click the button
          below and send me an message! You can also just email me at
          ElierPorto@gmail.com; I look forward to our conversation.
        </p>
        <ButtonContainer
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
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
