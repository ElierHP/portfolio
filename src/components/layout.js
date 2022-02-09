import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "normalize.css"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "../theme"
import Footer from "./Footer"

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
      {/* Global Styles */}
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.dark};
          }
          ,
          h1,
          h2,
          h3,
          p,
          a,
          div {
            font-family: ${theme.fonts.body};
            text-decoration: none;
            color: ${theme.colors.light};
          }
          ,
          h1,
          h2,
          h3 {
            letter-spacing: ${theme.letterSpacing[2]}px;
          }
          ,
          a,
          p,
          div {
            font-size: ${theme.fontSizes.medium}px;
          }
        `}
      />

      {/* Header, Main, Footer */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
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

const Main = styled.main`
  min-height: calc(100vh - 122.69px);
`

export default Layout
