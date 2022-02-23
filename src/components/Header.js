import React, { useState } from "react"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import styled from "@emotion/styled"
import theme from "../theme"
import { css } from "@emotion/react"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"

const Header = () => {
  // Toggle dropdown menu state
  const [toggle, setToggle] = useState(false)

  // State for changing navbar color on scroll
  const [navColor, setNavColor] = useState(false)

  // Open dropdown menu
  const openMenu = () => {
    setToggle(true)
    setNavColor(false)
  }

  // Close dropdown menu
  const closeMenu = () => {
    setToggle(false)
  }

  // Change navbar color when user scrolls down
  const changeBackground = () => {
    if (toggle) {
      setNavColor(false)
    } else {
      window.scrollY >= 96.84 ? setNavColor(true) : setNavColor(false)
    }
  }
  window.addEventListener("scroll", changeBackground)

  return (
    <>
      {/* Navbar */}
      <Container
        css={css`
          background-color: ${navColor
            ? `${theme.colors.primary}`
            : "transparent"};
        `}
      >
        <NavBar>
          {/* Logo */}
          <Logo>
            <LogoLink to="/">E.H.</LogoLink>
          </Logo>
          {/* Menu Icon */}
          <IconButton>
            {toggle ? (
              <CgClose size={45} onClick={closeMenu} />
            ) : (
              <HiMenuAlt3 size={45} onClick={openMenu} />
            )}
          </IconButton>
        </NavBar>
      </Container>

      {/* Dropdown Menu */}
      <Menu open={toggle}>
        <li onClick={closeMenu}>
          <MenuLink href="#home">HOME</MenuLink>
        </li>
        <li onClick={closeMenu}>
          <MenuLink href="#about">ABOUT</MenuLink>
        </li>
        <li onClick={closeMenu}>
          <MenuLink href="#projects">PROJECTS</MenuLink>
        </li>
        <li onClick={closeMenu}>
          <MenuLink href="#contact">CONTACT</MenuLink>
        </li>
        {/* Icons */}
        <IconContainer>
          <SocialIcon href="https://github.com/ElierHP">
            <AiFillGithub size={45} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/elier-hernandez-a16906161/">
            <AiFillLinkedin size={45} />
          </SocialIcon>
          <SocialIcon href="mailto:elierporto@gmail.com">
            <AiOutlineMail size={45} />
          </SocialIcon>
        </IconContainer>
      </Menu>
    </>
  )
}

// Styles
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1250px;
  margin: auto;
`

const Logo = styled.div`
  font-weight: ${theme.fontWeights.bold};
`

const LogoLink = styled(Link)`
  font-size: 2.5rem;
  letter-spacing: 3px;
`

const IconButton = styled.div`
  display: flex;
  color: ${theme.colors.light};
  cursor: pointer;
`

// Dropdown Menu
const Menu = styled.ul`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${theme.colors.primaryDark};
  text-align: center;
  text-decoration: none;
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: center;

  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100vh)")};
  opacity: ${props => (props.open ? "1" : "0")};
  transition: all 0.5s ease-in-out;
`

const MenuLink = styled.a`
  font-size: ${theme.fontSizes.heading}rem;
  font-weight: ${theme.fontWeights.body};
  letter-spacing: 5px;
  border-bottom: 5px solid ${theme.colors.primaryDark};
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${theme.colors.primaryLight};
    border-bottom: 5px solid ${theme.colors.primaryLight};
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 3rem;
`

const SocialIcon = styled.a`
  display: flex;
  color: ${theme.colors.light};
  cursor: pointer;
`

export default Header
