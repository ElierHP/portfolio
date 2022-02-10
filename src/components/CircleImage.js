import React from "react"
import styled from "@emotion/styled"

function CircleImage() {
  return (
    <Container>
      <OuterCircle>
        <Circle1>
          <Circle2>
            <Circle3>
              <Circle4>
                <Circle5>
                  <InnerCircle />
                </Circle5>
              </Circle4>
            </Circle3>
          </Circle2>
        </Circle1>
      </OuterCircle>
    </Container>
  )
}

// Styles
const Container = styled.div`
  position: absolute;
  top: -17rem;
  right: -5rem;
  z-index: -20;
`

const OuterCircle = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 900px;
  min-width: 900px;
  position: relative;
`
const Circle1 = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 800px;
  min-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -400px 0px 0px -400px;
`
const Circle2 = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 700px;
  min-width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -350px 0px 0px -350px;
`
const Circle3 = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 600px;
  min-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -300px 0px 0px -300px;
`

const Circle4 = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 500px;
  min-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px -250px;
`

const Circle5 = styled.div`
  background: rgba(181, 224, 222, 0.2);
  border-radius: 50%;
  min-height: 400px;
  min-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -200px 0px 0px -200px;
`

const InnerCircle = styled.div`
  position: absolute;
  background: rgba(208, 255, 227, 0.8);
  border-radius: 50%;
  min-height: 300px;
  min-width: 300px;
  top: 50%;
  left: 50%;
  margin: -150px 0px 0px -150px;
`
export default CircleImage
