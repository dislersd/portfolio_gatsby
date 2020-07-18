import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ScrollingProvider } from "react-scroll-section"
import config from "react-reveal/globals"

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
  }
`

config({ ssrFadeout: true })

const Layout = ({ children }) => (
  <main>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with ☕️
          {` `}
          <a href="https://www.gatsbyjs.org">Dylan Dislers</a>
        </footer>
      </ScrollingProvider>
    </ThemeProvider>
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
