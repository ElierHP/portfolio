import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"
import theme from "../theme"
import Title from "./Title"

function Work() {
  return (
    <Container>
      <Section>
        <Title
          heading="What I do"
          subheading="Development"
          align="center"
          marginTop="1.2"
        />
        <Wrapper>
          <Card>
            <h3>Font End Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed id
              aperiam perspiciatis accusamus sint impedit nulla eius numquam
              natus hic.
            </p>
          </Card>
          <Card>
            <h3>Back End Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed id
              aperiam perspiciatis accusamus sint impedit nulla eius numquam
              natus hic.
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
  display: flex;
  justify-content: space-around;
  grid-gap: 3rem;
  margin-top: 4rem;
  flex-direction: column;
  ${theme.mq()[1]} {
    flex-direction: row;
    margin-top: 8rem;
  }
`

const Card = styled.div`
  padding: 4rem;
  border: 3px solid ${theme.colors.neutral};
  border-radius: 0.2rem;
`

export default Work
