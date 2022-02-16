import * as React from "react"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import styled from "@emotion/styled"
import theme from "../theme"

const Header = () => {
  return (
    <NavBar>
      {/* Logo */}
      <Logo>
        <LogoLink to="/">E.H.</LogoLink>
      </Logo>
      {/* Menu Bar */}
      <IconButton>
        <HiMenuAlt3 size={40} />
      </IconButton>
    </NavBar>
  )
}

// styles
const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const Logo = styled.div`
  z-index: 1;
  font-weight: ${theme.fontWeights.bold};
`

const LogoLink = styled(Link)`
  font-size: 2rem;
  letter-spacing: 3px;
`

const IconButton = styled.div`
  color: ${theme.colors.light};
  cursor: pointer;
  z-index: 1;
`

export default Header
