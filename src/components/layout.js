import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ScrollingProvider } from "react-scroll-section"
import config from "react-reveal/globals"

import Header from "./Header"
import "./global.css"
import colors from "../../colors"

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap&family=Roboto');

  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    font-display: swap;
    font-display: fallback;
    overflow-x: hidden;
    margin: 0 80px;
  }
`

config({ ssrFadeout: true })

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
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <ScrollingProvider>
          <Header
            siteTitle={data.site.siteMetadata.title}
            links={data.site.siteMetadata.links}
          />
          <div>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with ❤️
              {` `}
              <a href="https://www.gatsbyjs.org">Dylan Dislers</a>
            </footer>
          </div>
        </ScrollingProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
