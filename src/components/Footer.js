import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"

const Footer = () => {
  return (
    <MainFooter>
      All rights reserved © {new Date().getFullYear()}, Built with Gatsby.
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
