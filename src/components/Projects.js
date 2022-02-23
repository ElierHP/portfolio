import React from "react"
import theme from "../theme"
import styled from "@emotion/styled"
import { AiFillGithub } from "react-icons/ai"
import { MdTravelExplore } from "react-icons/md"
import Container from "./Container"
import Title from "./Title"

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
    <Section id="projects">
      <Container>
        <Title
          heading="Projects"
          subheading="My Work"
          align="center"
          marginTop="1.2"
        />
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
    </Section>
  )
}

//Styles

const Section = styled.section`
  background: ${theme.colors.neutral};
  padding-top: ${theme.space[8]}rem;
  padding-bottom: ${theme.space[8]}rem;
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
  ${theme.mq()[3]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Card = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: ${theme.colors.light};
  padding: 3rem 3rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  ${theme.mq()[1]} {
    padding: 5.5rem 5rem;
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
  font-size: ${theme.fontSizes.small}rem;
`

const IconContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
  justify-content: right;
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;
`

const IconButton = styled.div`
  font-size: 3.2rem;
  color: ${theme.colors.primary};
`

export default Projects
