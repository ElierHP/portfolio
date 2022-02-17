import * as React from "react"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import styled from "@emotion/styled"
import theme from "../theme"
import Container from "./Container"

const Header = () => {
  return (
    <Container>
      <NavBar>
        {/* Logo */}
        <Logo>
          <LogoLink to="/">E.H.</LogoLink>
        </Logo>
        {/* Menu Bar */}
        <IconButton>
          <HiMenuAlt3 size={50} />
        </IconButton>
      </NavBar>
    </Container>
  )
}

// styles
const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Logo = styled.div`
  z-index: 1;
  font-weight: ${theme.fontWeights.bold};
`

const LogoLink = styled(Link)`
  font-size: 2.5rem;
  letter-spacing: 3px;
`

const IconButton = styled.div`
  color: ${theme.colors.light};
  cursor: pointer;
  z-index: 1;
`

export default Header
