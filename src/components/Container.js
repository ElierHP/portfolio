import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"

function Container({ children }) {
  return <Component>{children}</Component>
}

const Component = styled.div`
  max-width: 1250px;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin: auto;
  ${theme.mq()[0]} {
    padding: 0 3rem;
  }
`
export default Container
