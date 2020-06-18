import React from "react"
import { Section } from "react-scroll-section"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { Image, Text, Flex, Box, Link } from "rebass"
import styled from "styled-components"

import { CardContainer, Card } from "../components/Card"

const CARD_HEIGHT = "200px"

const MEDIA_QUERY_SMALL = "@media (max-width: 400px)"
const MEDIA_QUERY_CARD_HEIGHT = "@media (max-width: 1156px)"

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: -204px; /*don't know why I have to add 3.5px here ...*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }

  ${MEDIA_QUERY_CARD_HEIGHT} {
    height: 200px;
  }
`

const WholeCardLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
`

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <WholeCardLink href={projectUrl} target="_blank">
    <Card p={0} onClick="pointer">
      <Flex style={{ height: "100%" }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1}>
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: "auto" }}>
            {description}
          </Text>
        </TextContainer>

        <ImageContainer>
          <ProjectImage src={logo.image.src} alt={logo.title} />
          <ProjectTag>
            <Flex
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box mx={1} fontSize={5}>
                {/* <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                /> */}
              </Box>
              <Box mx={1} fontSize={5}>
                {/* <SocialLink
                  name="See project"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                /> */}
              </Box>
            </Flex>
            {/* <ImageSubtitle
              bg="primary"
              color="white"
              y="bottom"
              x="right"
              round
            >
              {type}
            </ImageSubtitle> */}
            {/* <Hide query={MEDIA_QUERY_SMALL}>
              <ImageSubtitle bg="lightgrey">{publishedDate}</ImageSubtitle>
            </Hide> */}
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </Card>
  </WholeCardLink>
)

// ------------------------------------------------

const Projects = () => (
  <Section id="projects">
    <div
      style={{
        width: "100%",
        margin: "50px auto",
        height: "1000px",
        borderTop: "2px solid blue",
      }}
    >
      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            contentfulAbout {
              projects {
                id
                name
                description
                projectUrl
                repositoryUrl
                publishedDate(formatString: "YYYY")
                type
                logo {
                  title
                  image: resize(width: 200, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={({ contentfulAbout }) => (
          <CardContainer minWidth="350px">
            {contentfulAbout.projects.map((p, i) => (
              <Fade bottom delay={i * 200} key={p.id}>
                <Project {...p} />
              </Fade>
            ))}
          </CardContainer>
        )}
      />
    </div>
  </Section>
)

export default Projects
