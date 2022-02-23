import * as React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Work from "../components/Work"

const IndexPage = () => (
  <Layout home={true}>
    <Seo title="Home" />
    <Hero />
    <About />
    <Work />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
