import React, { useState } from "react"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import styled from "@emotion/styled"
import theme from "../theme"
import Container from "./Container"

const Header = () => {
  // Toggle dropdown menu state
  const [toggle, setToggle] = useState(false)

  const openMenu = () => {
    setToggle(true)
  }

  const closeMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <Container>
        <NavBar>
          {/* Logo */}
          <Logo>
            <LogoLink to="/">E.H.</LogoLink>
          </Logo>
          {/* Menu Bar */}
          <IconButton>
            {toggle ? (
              <CgClose size={50} onClick={closeMenu} />
            ) : (
              <HiMenuAlt3 size={50} onClick={openMenu} />
            )}
          </IconButton>
        </NavBar>
      </Container>

      {/* Dropdown Menu */}
      <Menu open={toggle}>
        <MenuItem onClick={closeMenu}>
          <MenuLink href="#home" animate>
            HOME
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <MenuLink href="#about">ABOUT</MenuLink>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <MenuLink href="#projects">PROJECTS</MenuLink>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <MenuLink href="#contact">CONTACT</MenuLink>
        </MenuItem>
      </Menu>
    </>
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
  z-index: 2;
`

// Navbar dropdown menu
const Menu = styled.ul`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${theme.colors.dark};
  text-align: center;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100vh)")};
  transition: all 0.5s ease-in-out;
`

const MenuItem = styled.li`
  padding: 4rem 0;
`

const MenuLink = styled.a`
  font-size: ${theme.fontSizes.heading}rem;
  font-weight: ${theme.fontWeights.body};
  letter-spacing: 5px;
`

export default Header
