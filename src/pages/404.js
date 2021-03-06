import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import * as styles from "./404.module.css"

const NotFoundPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <Link to="/">Go home</Link>.
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
