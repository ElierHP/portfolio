import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "normalize.css"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "../theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Global
        styles={css`
          h1,
          h2,
          h3,
          p,
          a,
          div {
            font-family: ${theme.fonts.body};
            text-decoration: none;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        All rights reserved © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//Styles
const Container = styled.div`
  max-width: 1250px;
  padding: 0 1rem;
  margin: auto;
`

export default Layout
