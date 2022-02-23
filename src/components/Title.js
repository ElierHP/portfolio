import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

function Title({ heading, subheading, marginTop, align }) {
  return (
    <>
      <SubHeading
        css={css`
          text-align: ${align};
        `}
      >
        {subheading}
      </SubHeading>
      <Heading
        css={css`
          text-align: ${align};
          margin-top: ${marginTop}rem;
        `}
      >
        {heading}
      </Heading>
    </>
  )
}

//Styles
const Heading = styled.h2`
  margin-top: 1.5rem;
`

const SubHeading = styled.h4`
  margin-left: 0.5rem;
`

export default Title
