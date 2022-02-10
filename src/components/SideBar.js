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
          <IconButton>
            <AiFillGithub />
          </IconButton>
          <IconButton>
            <AiOutlineMail />
          </IconButton>
          <IconButton>
            <AiFillLinkedin />
          </IconButton>
        </IconWrapper>
        <LeftLine />
      </LeftBar>
      <RightBar>
        <RightLine />
        <SiteUrl>
          <a href="/">https://elier-hernandez.com</a>
        </SiteUrl>
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

const IconButton = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
`

const LeftLine = styled.div`
  margin: auto;
  width: 2px;
  height: 200px;
  background-color: ${theme.colors.light};
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
  top: 43rem;
  right: -10rem;
`

const RightLine = styled.div`
  width: 2px;
  height: 300px;
  background-color: ${theme.colors.light};
  margin-top: 15rem;
`

export default SideBar
