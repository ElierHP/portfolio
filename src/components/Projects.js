import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import Button from "./Button"

function Projects() {
  const data = [
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built with React and Express.",
      image: "",
      technologies: "react, express, mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 0,
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built with React and Express.",
      image: "",
      technologies: "react, express, mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 1,
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built with React and Express.",
      image: "",
      technologies: "react, express, mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 2,
    },
  ]
  return (
    <Container>
      <Title>My Projects</Title>
      <Wrapper>
        {data.map(project => (
          <Card key={project.key}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TechText>technologies: {project.technologies}</TechText>
            <ButtonContainer>
              <Button
                href={project.gitHubUrl}
                color={`${theme.colors.primary}`}
              >
                GITHUB
              </Button>
              <Button
                href={project.siteUrl}
                color={`${theme.colors.primaryDark}`}
              >
                VIEW
              </Button>
            </ButtonContainer>
          </Card>
        ))}
      </Wrapper>
    </Container>
  )
}

//Styles

const Container = styled.div`
  padding-top: ${theme.space[8]}rem;
  padding-bottom: ${theme.space[8]}rem;
`

const Wrapper = styled.div`
  display: flex;
  grid-gap: 3rem;
  flex-direction: column;
  ${theme.mq()[3]} {
    flex-direction: row;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  ${theme.mq()[1]} {
    margin-bottom: 8rem;
  }
`

const Card = styled.div`
  border-radius: 0.5rem;
  background: ${theme.colors.neutral};
  padding: 2rem 3rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  ${theme.mq()[1]} {
    padding: 4rem 5rem;
  }
`

const TechText = styled.p`
  font-size: ${theme.fontSizes.small}rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 1rem;
  margin-top: 2rem;
  ${theme.mq()[0]} {
    flex-direction: row;
    margin-top: 4rem;
    width: 80%;
  }
`

export default Projects
