import React from "react"
// import Dylan from "../images/Dylan.svg"
import { Section } from "react-scroll-section"
import styled from "styled-components"
import Image from "../components/Image"
import Fade from "react-reveal/Fade"

const IntroStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono=swap&family=Roboto");


  h1 {
    font-family: "Roboto Mono", monospace;
  }

  .intro-me {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rem;
    padding: 200px 10% 0;


    @media (max-width: 1030px) {
      flex-direction: column;
    }
  }

  .intro-img {
    width: 50%;
    max-width: 18rem;

    @media (max-width: 1030px) {
      margin-top: 50px;
    }
  }

  .intro-txt {
    max-width: 50%;
    font-family: "Roboto Mono", monospace;

    @media (max-width: 1030px) {
      max-width: 600px;
      width: 100%;
    }
  }

  .intro-header {
    font-size: 3rem;
    font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
  }

  .intro-body {
    font-size: 1.5rem;
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
          <Fade left>
            <div className="intro-txt">
              <h2 className="intro-header">Hey, I'm Dylan</h2>
              <p className="intro-body">
                I'm a <strong>full-stack web developer</strong> and{" "}
                <strong>Javascript nerd</strong> committed to building{" "}
                <strong>impactful</strong> and <strong>user-centered</strong>{" "}
                applications.
              </p>
            </div>
          </Fade>
          <div className="intro-img">
            <Image />
          </div>
        </div>
      </IntroStyle>
    </Section>
  )
}
