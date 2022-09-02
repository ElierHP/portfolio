import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import Video from "../images/video.mp4"
import AOS from "aos"
import "normalize.css"
import "../css/global.scss"
import "../css/components/Layout.scss"

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
    <div className="layout_page">
      {/* Video */}
      <div className="layout_dark-container">
        <video
          className="layout_desktop-video"
          autoPlay={true}
          loop={true}
          muted={true}
          src={Video}
        />
      </div>

      {/* Header, Main, Footer */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="layout_main">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
