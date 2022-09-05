import React, { useState } from "react"
import { Link } from "gatsby"
import { HiMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import "../css/components/header.scss"
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
      <div
        className={`header_container ${
          // Nav color changes when scrolling past initial view port.
          navColor ? "header_color-primary" : "header_color-transparent"
        }`}
      >
        <nav className="header_navbar">
          {/* Logo */}
          <div
            className="header_logo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Link className="header_logo-link" to="/">
              E.H.
            </Link>
          </div>
          {/* Menu Icon */}
          <div
            className="header_icon-btn"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {toggle ? (
              <CgClose size={45} onClick={closeMenu} />
            ) : (
              <HiMenuAlt3 size={45} onClick={openMenu} />
            )}
          </div>
        </nav>
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`header_menu ${
          toggle ? "header_menu_slide-up" : "header_menu_slide-down"
        }`}
        open={toggle}
      >
        <li>
          <a className="header_menu-link" href="#home" onClick={closeMenu}>
            HOME
          </a>
        </li>
        <li>
          <a className="header_menu-link" href="#about" onClick={closeMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a className="header_menu-link" href="#projects" onClick={closeMenu}>
            PROJECTS
          </a>
        </li>
        <li>
          <a className="header_menu-link" href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </li>

        {/* Icons */}
        <div className="header_icons-container">
          <a
            className="header_icon"
            href="https://github.com/ElierHP"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={45} />
          </a>
          <a
            className="header_icon"
            href="https://www.linkedin.com/in/elier-hernandez-a16906161/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={45} />
          </a>
          <a className="header_icon" href="mailto:elierporto@gmail.com">
            <AiOutlineMail size={45} />
          </a>
        </div>
      </ul>
    </>
  )
}

export default Header
