import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"

const Button = ({ color, children }) => {
  return <Link style={{ backgroundColor: color }}>{children}</Link>
}

//Styles
const Link = styled.a`
  display: inline-block;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  border-radius: 0.2rem;
  cursor: pointer;
  ${theme.mq()[0]} {
    width: 150px;
  }
`

export default Button
