import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"
import Landing from "../components/Landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Projects />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
