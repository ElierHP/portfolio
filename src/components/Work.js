import React from "react"
import Container from "./Container"
import Title from "./Title"
import "aos/dist/aos.css"
import "../css/components/work.scss"

function Work() {
  return (
    <Container>
      <section className="work_section">
        <div data-aos="fade-down" data-aos-duration="1000">
          <Title
            heading="What I do"
            subheading="Development"
            align="center"
            marginTop="1.2"
          />
        </div>
        <div className="work_card-wrapper">
          <div
            className="work_card"
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
          </div>
          <div
            className="work_card"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Back End Development</h3>
            <p>
              I have experience building backend APIs with user authentication
              and authorization. I've created my own API for multiple projects
              of mine using tools such as Node, Express and Ruby on Rails.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Work
