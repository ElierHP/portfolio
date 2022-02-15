import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
