import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import styled from "styled-components"
import { Flex } from "rebass"
import { SectionLinks } from "react-scroll-section"

import RouteLink from "../components/RouteLink"
import HeadOne from "./HeadOne"

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

const HeaderContainer = styled(Headroom)`
  .headroom {
    padding: 0 100px;
  }

  .headroom--pinned {
    background-color: white;
  }
  position: absolute;
  width: 100%;

  h1 {
    white-space: nowrap;
  }

  .section-links {
    border: 2px solid green;
    @media (max-width: 400px) {
      display: flex;
      justify-content: center;
    }
  }

  span {
    white-space: nowrap;
  }

  div div {
    margin: 10px;
    @media (max-width: 845px) {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  div div div div div {
    border: 2px solid green;
    @media (max-width: 845px) {
      margin: 10 5;
    }
  }
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
      p={3}
    >
      <SectionLinks className="section-links">
        {({ allLinks }) => {
          const { home, links } = formatLinks(allLinks)

          const homeLink = home && (
            <HeadOne
              title={siteTitle}
              alt="Portfolio Logo"
              onClick={home.onClick}
            />
          )

          const navLinks = links.map(({ name, value }) => (
            <Flex m={30}>
              <RouteLink key={name} onClick={value.onClick} name={name} />
            </Flex>
          ))

          return (
            <Fragment>
              {homeLink}
              <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
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
