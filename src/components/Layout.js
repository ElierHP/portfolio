import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "normalize.css"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "../theme"
import Footer from "./Footer"
import Video from "../images/video.mp4"

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
    <Page>
      {/* Video */}
      <DarkContainer>
        <DesktopVideo autoPlay={true} loop={true} muted={true} src={Video} />
      </DarkContainer>
      {/* Global Styles */}
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            scroll-behavior: smooth;
          }
          ,
          body {
            background-color: ${theme.colors.light};
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
            color: ${theme.colors.dark};
            text-decoration: none;
          }
          a {
            color: ${theme.colors.light};
            text-decoration: none;
          }
          ,
          h1,
          h2,
          h3,
          h4 {
            font-family: ${theme.fonts.heading};
            letter-spacing: ${theme.letterSpacing.heading}px;
            line-height: ${theme.lineHeights.heading};
          }
          ,
          h1 {
            font-size: ${theme.fontSizes.heading}rem;
            ${theme.mq()[1]} {
              font-size: ${theme.fontSizes.largeHeading}rem;
            }
          }
          ,
          h2 {
            font-size: ${theme.fontSizes.mobileHeading}rem;
            color: ${theme.colors.dark};
            ${theme.mq()[1]} {
              font-size: ${theme.fontSizes.heading}rem;
            }
          }
          ,
          h3 {
            font-size: ${theme.fontSizes.medium}rem;
            ${theme.mq()[1]} {
              font-size: ${theme.fontSizes.large}rem;
            }
          }
          ,
          h4 {
            font-size: ${theme.fontSizes.small}rem;
            color: ${theme.colors.primary};
            margin: 0;
          }
        `}
      />

      {/* Header, Main, Footer */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//Styles
const Page = styled.div`
  overflow: hidden;
`

const DarkContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
`

const DesktopVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`

const Main = styled.main`
  min-height: calc(100vh - 114.19px);
`

export default Layout
