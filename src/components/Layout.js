import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import styled from "@emotion/styled"
import Footer from "./Footer"
import Video from "../images/video.mp4"
import AOS from "aos"
import "normalize.css"
import "../css/global.scss"

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

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Page>
      {/* Video */}
      <DarkContainer>
        <DesktopVideo autoPlay={true} loop={true} muted={true} src={Video} />
      </DarkContainer>

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
  background: rgba(18, 48, 69, 0.5);
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
