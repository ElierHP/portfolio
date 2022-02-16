import React from "react"
import styled from "@emotion/styled"

const Button = ({ color, children, href }) => {
  return (
    <Link href={href} style={{ backgroundColor: color }}>
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
`

export default Button
