import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"
import theme from "../theme"
import Title from "./Title"
import "aos/dist/aos.css"

function Work() {
  return (
    <Container>
      <Section>
        <div data-aos="fade-down" data-aos-duration="1000">
          <Title
            heading="What I do"
            subheading="Development"
            align="center"
            marginTop="1.2"
          />
        </div>
        <Wrapper>
          <Card
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h3>Font End Development</h3>
            <p>
              I build front end interfaces for the web using HTML, CSS,
              Javascript and React. I also use a variety of libraries and tools
              depending on the problem I'm trying to solve.
            </p>
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Back End Development</h3>
            <p>
              I have experience building backend APIs with user authentication
              and authorization. I've created my own API for multiple projects
              of mine using tools such as Node and Express.
            </p>
          </Card>
        </Wrapper>
      </Section>
    </Container>
  )
}

// Styles

const Section = styled.section`
  padding-top: ${theme.space[6]}rem;
  padding-bottom: ${theme.space[10]}rem;
  ${theme.mq()[2]} {
    padding-top: ${theme.space[8]}rem;
    padding-bottom: ${theme.space[10]}rem;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  margin-top: 4rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 1fr;
    margin-top: 8rem;
  }
`

const Card = styled.div`
  padding: 4rem;
  border: 3px solid ${theme.colors.neutral};
  border-radius: 0.2rem;
`

export default Work
