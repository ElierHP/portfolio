import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { MdTravelExplore } from "react-icons/md"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import "../css/components/projects.scss"

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
      delay: 100,
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
      delay: 200,
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
      delay: 300,
    },
  ]
  return (
    <section id="projects">
      <Container>
        <div data-aos="fade-down" data-aos-duration="1000">
          <Title
            heading="Projects"
            subheading="My Work"
            align="center"
            marginTop="1.2"
          />
        </div>
        <div className="projects_wrapper">
          {data.map(project => (
            <div
              className="projects_card"
              key={project.key}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={project.delay}
            >
              <h4 className="projects_card-subtitle">Featured Project</h4>
              <h3 className="projects_card-title">{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.description2}</p>
              <p className="projects_card-technology">{project.technologies}</p>
              <div className="projects_card_icon-container">
                <a
                  className="projects_card_icon-button"
                  href={project.gitHubUrl}
                >
                  <AiFillGithub />
                </a>
                <a className="projects_card_icon-button" href={project.siteUrl}>
                  <MdTravelExplore />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
