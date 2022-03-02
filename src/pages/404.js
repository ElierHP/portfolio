import * as React from "react"
import Button from "../components/Button"
import Seo from "../components/Seo"
import theme from "../theme"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import "normalize.css"

const NotFoundPage = () => (
  <Container>
    <Seo title="404: Not found" />
    <Title>404: Not Found</Title>
    <Typography>You just hit a route that doesn&#39;t exist...</Typography>
    <Typography>
      Press the Home button below to return to the main website.
    </Typography>
    <IconButton to="/">
      <Button color={theme.colors.primary}>Home</Button>
    </IconButton>
  </Container>
)

//Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -2rem;
  max-width: 1250px;
  padding: 0 2rem;
  margin: auto;
`

const Title = styled.h1`
  text-align: center;
  font-size: ${theme.fontSizes.mobileHeading}rem;
  ${theme.mq()[1]} {
    font-size: ${theme.fontSizes.heading}rem;
  }
  font-family: ${theme.fonts.heading};
  letter-spacing: ${theme.letterSpacing.heading}px;
  line-height: ${theme.lineHeights.heading};
`

const Typography = styled.p`
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.medium}rem;
  letter-spacing: ${theme.letterSpacing.body}px;
  line-height: ${theme.lineHeights.body};
  color: ${theme.colors.body};
  margin-top: 0;
`

const IconButton = styled(Link)`
  color: ${theme.colors.light};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.medium}rem;
  letter-spacing: ${theme.letterSpacing.body}px;
  line-height: ${theme.lineHeights.body};
  margin-top: 2rem;
`

export default NotFoundPage
