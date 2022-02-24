import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import "aos/dist/aos.css"

const Footer = () => {
  return (
    <MainFooter>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="0">
        {" "}
        All rights reserved © {new Date().getFullYear()}, Built with Gatsby.
      </div>
    </MainFooter>
  )
}

//Styles
const MainFooter = styled.footer`
  margin-top: ${theme.space[3]}rem;
  background: ${theme.colors.neutral};
  padding: 1.5rem;
  text-align: center;
`

export default Footer
