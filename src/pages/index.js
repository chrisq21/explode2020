import * as React from "react"
import styled from '@emotion/styled'
import '../global.css'
import Helmet from 'react-helmet'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const SketchWrapper = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0px;
  p {
    font-family: monospace;
    margin: 0;
    margin-bottom: 0.5rem;
    text-align: center;
  }
`

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <title>Explode 2020 🎉🎉🎉</title>
     <PageWrapper>
       <SketchWrapper src="https://editor.p5js.org/chrisq21/embed/oey6ATnZh"></SketchWrapper>
       <DescriptionWrapper>
        <p>You did it. You really did it. You made it through the strangest year imaginable. Now give yourself a pat on the back, and explode 2020! </p>
        <p>click or drag to create mini explosions 💥</p>
        <p>press space to blow it all up 💥</p>
        <p>Good luck in 2021! 🎉</p>
       </DescriptionWrapper>
     </PageWrapper>
    </main>
  )
}

export default IndexPage
