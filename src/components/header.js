import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import styled from "styled-components"
import { Flex } from "rebass"
import { SectionLinks } from "react-scroll-section"
import Fade from "react-reveal/Fade"

import RouteLink from "../components/RouteLink"
import HeadOne from "./HeadOne"

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark},
  }
  /* margin-top: 50px; */

  position: sticky;
  width: 100%;
`

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === "home"
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null }
  )

const Header = ({ siteTitle, links }) => (
  <HeaderContainer>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks)

            const homeLink = home && (
              <HeadOne
                title={siteTitle}
                alt="Portfolio Logo"
                onClick={home.onClick}
                style={{
                  cursor: "pointer",
                }}
              />
            )

            const navLinks = links.map(({ name, value }) => (
              <RouteLink key={name} onClick={value.onClick} name={name} />
            ))

            return (
              <Fragment>
                {homeLink}
                <Flex>{navLinks}</Flex>
              </Fragment>
            )
          }}
        </SectionLinks>
      </Flex>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
