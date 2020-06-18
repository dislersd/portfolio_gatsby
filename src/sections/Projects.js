import React from "react"
import { Section } from "react-scroll-section"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

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
          <div>
            {contentfulAbout.projects.map((p, i) => (
              <Fade bottom delay={i * 200} key={p.id}>
                <div>{p.name}</div>
              </Fade>
            ))}
          </div>
        )}
      />
    </div>
  </Section>
)

export default Projects
