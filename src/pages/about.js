import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./about.module.css"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo
      title="About page"
      description="About page description."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>About this project</h1>
      <div>
        {data.allFile.edges.map(({ node }) => (
          <GatsbyImage image={getImage(node)} alt={node.name} key={node.id} />
        ))}
        <p>
          The repository of this Site is in{" "}
          <a href="https://github.com/vladfullstack/azure-gatsby-v1">
            Gatsby Starter Project Version 1
          </a>
        </p>
        <p>
          The original work done by <a href="https://github.com/mor10">mor10</a>{" "}
          from his course, Learning Gatsby.
        </p>
        <p>
          Deploying to other cloud provider like Gatsby Cloud, Netlify, AWS, GCF
          etc… sounds fun and we can link here when we have it running.
        </p>

        <p>This Gatsby Demo Site is hosted in Azure Static Web Apps.</p>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "robots" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
          id
          name
        }
      }
    }
  }
`

export default AboutPage
