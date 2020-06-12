import React from "react"
import Dylan from "../images/Dylan.svg"
import { Section } from "react-scroll-section"
import styled from "styled-components"

const IntroStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap&family=Roboto");

  /* header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
} */

  h1 {
    font-family: "Roboto Mono", monospace;
  }

  .intro-me {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rem;
    height: 60vh;
  }

  .intro-img {
    width: 50%;
    max-width: 18rem;
  }

  .intro-txt {
    max-width: 50%;
    font-family: "Roboto Mono", monospace;
  }

  .intro-header {
    font-size: 3.2rem;
    font-family: "Roboto Mono", monospace;
    white-space: nowrap;
  }

  .intro-body {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-family: "Roboto Mono", monospace;
  }

  @media (max-width: 1040px) {
    .intro-header {
      font-size: 2.8rem;
    }

    .intro-body {
      font-size: 24px;
    }
  }
`

export default function Landing() {
  return (
    <Section id="home">
      <IntroStyle>
        <div className="intro-me">
          <div className="intro-txt">
            <h2 className="intro-header">Hey, I'm Dylan</h2>
            <p className="intro-body">
              I'm a <strong>full-stack web developer</strong> and{" "}
              <strong>Javascript nerd</strong> committed to building{" "}
              <strong>impactful</strong> and <strong>user-centered</strong>{" "}
              applications.
            </p>
          </div>

          <div className="intro-img">
            <img src={Dylan} alt="Illustration of Dylan" />
          </div>
        </div>
      </IntroStyle>
    </Section>
  )
}
