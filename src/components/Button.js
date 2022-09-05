import React from "react"
import "../css/components/button.scss"

const Button = ({ color, children, href }) => {
  return (
    <a className={`button_link ${color}`} href={href}>
      {children}
    </a>
  )
}

export default Button
