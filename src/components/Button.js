import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import { css } from "@emotion/react"

const Button = ({ color, children, href }) => {
  return (
    <Link
      href={href}
      css={css`
        background-color: ${color};
      `}
    >
      {children}
    </Link>
  )
}

//Styles
const Link = styled.a`
  display: inline-block;
  padding: 1rem 4rem;
  text-align: center;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

export default Button
