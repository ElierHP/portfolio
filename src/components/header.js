import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <NavBar>
    {/* Logo */}
    <h2>
      <Link to="/">{siteTitle}</Link>
    </h2>
    {/* Menu Bar */}
    <IconButton>
      <HiMenuAlt3 size={40} />
    </IconButton>
  </NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// styles
const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconButton = styled.div`
  cursor: pointer;
`

export default Header
