import React from "react"
import styled from "@emotion/styled"
import { AiFillGithub } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import theme from "../theme"

const SideBar = () => {
  return (
    <>
      <LeftBar>
        <IconWrapper>
          <IconButton href="https://github.com/ElierHP">
            <AiFillGithub />
          </IconButton>
          <IconButton href="mailto:elierporto@gmail.com">
            <AiOutlineMail />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/elier-hernandez-a16906161/">
            <AiFillLinkedin />
          </IconButton>
        </IconWrapper>
        <LeftLine />
      </LeftBar>
      <RightBar>
        <RightLine />
        <SiteUrl>https://elier-hernandez.com</SiteUrl>
      </RightBar>
    </>
  )
}

//Styles
// Left Side Bar
const LeftBar = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 0;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

const IconButton = styled.a`
  font-size: 2.5rem;
  color: ${theme.colors.neutral};
  cursor: pointer;
`

const LeftLine = styled.div`
  margin: auto;
  width: 2px;
  height: 200px;
  background-color: ${theme.colors.neutral};
  margin-top: 2rem;
`

//Right Side Bar
const RightBar = styled.div`
  position: fixed;
  right: 3rem;
  top: -15rem;
`

const SiteUrl = styled.p`
  transform: rotate(90deg);
  position: fixed;
  top: 38rem;
  right: -10rem;
  color: ${theme.colors.neutral};
`

const RightLine = styled.div`
  width: 2px;
  height: 250px;
  background-color: ${theme.colors.neutral};
  margin-top: 15rem;
`

export default SideBar
