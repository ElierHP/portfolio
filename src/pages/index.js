import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
