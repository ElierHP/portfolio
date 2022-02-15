import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"

const Footer = () => {
  return (
    <MainFooter>
      All rights reserved © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </MainFooter>
  )
}

//Styles
const MainFooter = styled.footer`
  margin-top: ${theme.space[3]}rem;
  background: ${theme.colors.card};
  padding: 1.5rem;
  text-align: center;
`

export default Footer
