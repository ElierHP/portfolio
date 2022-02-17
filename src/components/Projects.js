import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import { AiFillGithub } from "react-icons/ai"
import { MdTravelExplore } from "react-icons/md"

function Projects() {
  const data = [
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built.",
      image: "",
      technologies: "React, Express, Mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 0,
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built.",
      image: "",
      technologies: "React, Express, Mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 1,
    },
    {
      title: "Webmarks",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. This is an application built.",
      image: "",
      technologies: "React, Express, Mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 2,
    },
  ]
  return (
    <Page>
      <Container>
        <Subtitle>My Work</Subtitle>
        <Title>Projects</Title>
        <Wrapper>
          {data.map(project => (
            <Card key={project.key}>
              <CardSubtitle>Featured Project</CardSubtitle>
              <CardTitle>{project.title}</CardTitle>
              <p>{project.description}</p>
              <p>{project.description}</p>
              <TechText>{project.technologies}</TechText>
              <IconContainer>
                <IconButton>
                  <AiFillGithub />
                </IconButton>
                <IconButton>
                  <MdTravelExplore />
                </IconButton>
              </IconContainer>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </Page>
  )
}

//Styles

const Page = styled.section`
  background: ${theme.colors.neutral};
`

const Container = styled.div`
  padding-top: ${theme.space[8]}rem;
  padding-bottom: ${theme.space[8]}rem;
  max-width: 1250px;
  margin: auto;
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
  margin-top: 1.2rem;
  ${theme.mq()[1]} {
    margin-bottom: 8rem;
  }
`

const Subtitle = styled.h4`
  text-align: center;
`

const Card = styled.div`
  border-radius: 0.5rem;
  background: ${theme.colors.light};
  padding: 2rem 3rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  ${theme.mq()[1]} {
    padding: 2rem 5rem;
  }
`

const CardTitle = styled.h3`
  margin-top: 0;
`

const CardSubtitle = styled.h4`
  padding-top: 1rem;
  margin-bottom: 1rem;
`

const TechText = styled.p`
  font-weight: ${theme.fontWeights.bold};
`

const IconContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
  justify-content: right;
`

const IconButton = styled.div`
  font-size: 3rem;
`

export default Projects
