import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import styled from "@emotion/styled"
import theme from "../theme"

const Header = ({ siteTitle }) => (
  <NavBar>
    {/* Logo */}
    <Logo>
      <Link to="/">{siteTitle}</Link>
    </Logo>
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
  height: 70px;
`

const Logo = styled.div`
  font-size: ${theme.fontSizes.medium}px;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: ${theme.letterSpacing[1]}px;
`

const IconButton = styled.div`
  cursor: pointer;
`

export default Header
