import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "normalize.css"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "../theme"
import Footer from "./Footer"
import SideBar from "./SideBar"

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
          html {
            font-size: 62.5%;
          }
          ,
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
            font-size: ${theme.fontSizes.medium}rem;  
            letter-spacing: ${theme.letterSpacing.body}px;
            line-height: ${theme.lineHeights.body};
            color: ${theme.colors.light};
            text-decoration: none;
          }
          ,
          h1,
          h2,
          h3 {
            font-family: ${theme.fonts.heading};
            letter-spacing: ${theme.letterSpacing.heading}px;
            line-height: ${theme.lineHeights.heading};
          },
          h1 {
            font-size: ${theme.fontSizes.largeHeading}rem;
          },
          h2 {
            font-size: ${theme.fontSizes.heading}rem;
            color: ${theme.colors.primaryLight}
          },
          h3 {
            font-size: ${theme.fontSizes.large}rem;
            color: ${theme.colors.primaryLight};
          },
        `}
      />

      {/* Header, Main, Footer */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SideBar />
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
  min-height: calc(100vh - 114.19px);
`

export default Layout