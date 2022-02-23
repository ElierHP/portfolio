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
        "Webmarks is an online file system that allows users to store folders and urls on the web. The Front end for this application was built using React and Material UI.",
      description2:
        "I built the Back End API using Node with Express and handled the user authentication with Passport. The project is currently live on the web and can be viewed below.",
      image: "",
      technologies: "React, MUI, Express, Mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      key: 0,
    },
    {
      title: "Sunshine Dental",
      description:
        "Sunshine dental is a dentistry located in Valencia Shores Blvd. They do teeth cleanings, fillings & crowns, root canals, invisilign and more. This was one of my first projects.",
      description2:
        "I made this website using React and Gatsby with Styled Components for the CSS. I used Formik to create the contact form and it is hosted with Netlify.",
      image: "",
      technologies: "React, Gatsby, Formik, Netlify",
      siteUrl: "https://sunshinedental.netlify.app/",
      gitHubUrl: "https://github.com/ElierHP/sunshinedental",
      key: 1,
    },
    {
      title: "My Portfolio Site",
      description:
        "My portfolio was built to showcase projects and information that you might want to know about me. It includes a download link to my CV, as well as a contact link connected to my email.",
      description2:
        "This website was built with React and Gatsby, using Emotion JS for handling the CSS. The codebase can be viewed by clicking on the Github icon below.",
      image: "",
      technologies: "React, Gatsby, Emotion Js",
      siteUrl: "https://elierhernandez.netlify.com/",
      gitHubUrl: "https://github.com/ElierHP/portfolio",
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
              <p>{project.description2}</p>
              <TechText>{project.technologies}</TechText>
              <IconContainer>
                <IconButton href={project.gitHubUrl}>
                  <AiFillGithub />
                </IconButton>
                <IconButton href={project.siteUrl}>
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

const IconButton = styled.a`
  font-size: 3.2rem;
  color: ${theme.colors.primary};
  cursor: pointer;
`

export default Projects
