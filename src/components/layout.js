import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ScrollingProvider } from "react-scroll-section"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <>
      <ScrollingProvider>
        <Header
          siteTitle={data.site.siteMetadata.title}
          links={data.site.siteMetadata.links}
        />
        <div style={{ margin: "5rem" }}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
