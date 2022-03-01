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
import "aos/dist/aos.css"

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
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground)
  }
  return (
    <>
      {/* Navbar */}
      <Container
        css={css`
          transition: ${theme.transition.primary};
          background-color: ${navColor
            ? `${theme.colors.primary}`
            : "rgba(0, 0, 0, 0)"};
        `}
      >
        <NavBar>
          {/* Logo */}
          <Logo data-aos="fade-right" data-aos-duration="1000">
            <LogoLink to="/">E.H.</LogoLink>
          </Logo>
          {/* Menu Icon */}
          <IconButton data-aos="fade-left" data-aos-duration="1000">
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
        <li>
          <MenuLink href="#home" onClick={closeMenu}>
            HOME
          </MenuLink>
        </li>
        <li>
          <MenuLink href="#about" onClick={closeMenu}>
            ABOUT
          </MenuLink>
        </li>
        <li>
          <MenuLink href="#projects" onClick={closeMenu}>
            PROJECTS
          </MenuLink>
        </li>
        <li>
          <MenuLink href="#contact" onClick={closeMenu}>
            CONTACT
          </MenuLink>
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
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.secondary};
  }
`

const IconButton = styled.div`
  display: flex;
  color: ${theme.colors.light};
  cursor: pointer;
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.secondary};
  }
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
  transition: ${theme.transition.secondary};
`

const MenuLink = styled.a`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.body};
  letter-spacing: 5px;
  border-bottom: 4px solid ${theme.colors.primaryDark};
  padding: 0 0.01rem;
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.secondary};
    border-bottom: 4px solid ${theme.colors.secondary};
    padding: 0 1.5rem;
  }
  ${theme.mq()[3]} {
    font-size: ${theme.fontSizes.heading}rem;
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
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.secondary};
  }
`

export default Header
