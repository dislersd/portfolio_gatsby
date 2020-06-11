import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Dylan from "../images/Dylan.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-me">
      <div className="intro-txt">
        <h2 className="intro-header">Hey, I'm Dylan</h2>
        <p className="intro-body">
          I'm a <strong>full-stack web developer</strong> and <strong>Javascript nerd</strong> committed to building <strong>impactful</strong> and <strong>user-centered</strong> applications.
        </p>
      </div>

      <div className="intro-img">
        {/* <Image /> */}
        <img src={Dylan} alt="Illustration of Dylan"/>
      </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
