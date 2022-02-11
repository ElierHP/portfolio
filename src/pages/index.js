import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
