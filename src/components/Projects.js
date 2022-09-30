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
      title: "Pencils and Inks",
      subtitle: "Featured Project",
      description:
        "Pencils and Inks is an e-commerce website that was developed from scratch using React & Next js for the client side and Ruby on Rails for the server API.",
      description2:
        "The website includes various features such as; products, users, filter settings, a review system with ratings, a shopping cart, and an admin panel for CRUD operations.",
      technologies: "Ruby on Rails, React, Postgresql",
      siteUrl: "https://pencils-and-inks.netlify.app/",
      gitHubUrl: "https://github.com/ElierHP/pencils-and-inks-server",
      delay: 100,
    },
    {
      title: "Webmarks",
      subtitle: "Featured Project",
      description:
        "Webmarks is an online file system that allows users to store folders and urls on the web. The front end for this application was built using React and Material UI.",
      description2:
        "The back end API was built using Node with Express, and the user authentication was handled with Passport. The project is currently live on the web and can be viewed below.",
      technologies: "React, MUI, Express, Mongodb",
      siteUrl: "https://webmarks.netlify.com",
      gitHubUrl: "https://github.com/ElierHP/webmarks",
      delay: 200,
    },

    {
      title: "Portfolio Site",
      subtitle: "Featured Project",
      description:
        "My portfolio was built to showcase projects and information that you might want to know about me. It includes a download link to my CV, as well as a contact link connected to my email.",
      description2:
        "This website was built with React and Gatsby, using Sass for handling the CSS. The codebase can be viewed by clicking on the Github icon below.",
      technologies: "React, Gatsby, Emotion Js",
      siteUrl: "https://elierhernandez.netlify.com/",
      gitHubUrl: "https://github.com/ElierHP/portfolio",
      delay: 300,
    },
    {
      title: "Sunshine Dental",
      subtitle: "Featured Project",
      description:
        "Sunshine dental is a dentistry located in Valencia Shores Blvd. They do teeth cleanings, fillings & crowns, root canals, invisilign and more.",
      description2:
        "This website was built using React and Gatsby with Styled Components for the CSS. Formik was used to handle the contact form and it is hosted with Netlify.",
      technologies: "React, Gatsby, Formik, Netlify",
      siteUrl: "https://sunshinedental.netlify.app/",
      gitHubUrl: "https://github.com/ElierHP/sunshinedental",

      delay: 100,
    },
    {
      title: "Skyline M. Marketing",
      subtitle: "Client Project",
      description:
        "Skyline is an advertisement agency located in New York. I worked with them on various projects for multiple clients, including their own main website.",
      description2:
        "The website was built using React and Gatsby. After the creation of the website, the client experienced a 100%+ increase in leads from their marketing campaigns. It was a huge success.",
      technologies: "React, Gatsby, Formik, Netlify",
      siteUrl: "https://skyline-mediamarketing.com/",
      gitHubUrl: "private",
      delay: 200,
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
              key={project.title}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={project.delay}
            >
              <h4
                className={`projects_card-subtitle ${
                  project.subtitle === "Client Project" &&
                  "color_secondary-dark"
                }`}
              >
                {project.subtitle}
              </h4>
              <h3 className="projects_card-title">{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.description2}</p>
              <p className="projects_card-technology">{project.technologies}</p>

              <div className="projects_card_icon-container">
                {project.gitHubUrl !== "private" && (
                  <a
                    className="projects_card_icon-button"
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                )}
                <a
                  className="projects_card_icon-button"
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
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
