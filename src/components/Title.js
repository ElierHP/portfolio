import React from "react"

function Title({ heading, subheading, marginTop, align }) {
  return (
    <>
      <h4
        className="ml-05"
        style={{
          textAlign: align,
        }}
      >
        {subheading}
      </h4>
      <h2
        className="mt-1-5"
        style={{ textAlign: align, marginTop: `${marginTop}rem` }}
      >
        {heading}
      </h2>
    </>
  )
}

export default Title
