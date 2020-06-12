import React from "react"
import Dylan from "../images/Dylan.svg"
import { Section } from "react-scroll-section"

export default function Landing() {
  return (
    <Section id="home">
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
    </Section>
  )
}
