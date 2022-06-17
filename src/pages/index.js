import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo
      title="The home page"
      description="You can customize the SEO text here."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Welcome to Gatsby and Azure</h1>
      <div>
        <p>Gatsby is a good framework to upskill your React!</p>
        <p>
          Though it may not look like much, it holds all the essentials you'll
          need to get started building your own sites with Gatsby.
        </p>
        <p>
          This Demo site will transform in many ways and will be utilized to
          build many great things. We will use this starter as a skeleton to
          experiment on other features of Gatsby.
        </p>{" "}
        <p>
          A Final note, Minor changes can be considered from time to time
          although we view this as the end form.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
