import React from "react"
import { css } from "@emotion/react"
import "../css/components/button.scss"

const Button = ({ color, children, href }) => {
  return (
    <a
      className="button_link"
      href={href}
      css={css`
        background-color: ${color};
      `}
    >
      {children}
    </a>
  )
}

export default Button
