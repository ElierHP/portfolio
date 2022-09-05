import React from "react"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import "../css/components/contact.scss"

function Contact() {
  return (
    <Container>
      <section id="contact">
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
        <div
          className="contact_button-container"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Button href="mailto:elierporto@gmail.com" color="bg-color_primary">
            SEND MESSAGE
          </Button>
        </div>
      </section>
    </Container>
  )
}

export default Contact
