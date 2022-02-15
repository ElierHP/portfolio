import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"

function Projects() {
  const data = [
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web.",
      image: "",
      technologies: "react, express, mongodb",
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web.",
      image: "",
      technologies: "react, express, mongodb",
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web.",
      image: "",
      technologies: "react, express, mongodb",
    },
  ]
  return (
    <Container>
      <Title>My Projects</Title>
      <Wrapper>
        {data.map(project => (
          <Card>
            <Image />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TechText>technologies: {project.technologies}</TechText>
          </Card>
        ))}
      </Wrapper>
    </Container>
  )
}

//Styles
const Image = styled.div`
  width: 100%;
  min-height: 200px;
  background: ${theme.colors.light};
  opacity: 0.4;
`

const Container = styled.div`
  padding-top: ${theme.space[8]}rem;
  padding-bottom: ${theme.space[8]}rem;
`

const Wrapper = styled.div`
  display: flex;
  grid-gap: 3rem;
  flex-direction: column;
  ${theme.mq()[1]} {
    flex-direction: row;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 8rem;
`

const Card = styled.div`
  border-radius: 0.5rem;
  background: ${theme.colors.secondaryDark};
  padding: 4rem 5rem;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
`

const TechText = styled.p`
  font-size: ${theme.fontSizes.small}rem;
`

export default Projects
