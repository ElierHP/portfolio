import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <NavBar>
    {/* Logo */}
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
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
  padding: 1rem 0;
`

const IconButton = styled.div`
  cursor: pointer;
`

export default Header
