import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../sections/Projects"
import Landing from "../sections/Landing"
import Header from "../components/Header"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          links
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        siteTitle={data.site.siteMetadata.title}
        links={data.site.siteMetadata.links}
      />
      <Landing />
      <Projects />
      <About />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
