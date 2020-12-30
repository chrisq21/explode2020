import * as React from "react"
import styled from '@emotion/styled'
import '../global.css'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const SketchWrapper = styled.iframe`
  width: 100%;
  height: 100%;
`
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Explode 2020 🎉🎉🎉</title>
     <PageWrapper>
       {/* <p>Description</p> */}
       {/* Embed p5 sketch */}
       <SketchWrapper src="https://editor.p5js.org/chrisq21/embed/oey6ATnZh"></SketchWrapper>
     </PageWrapper>
    </main>
  )
}

export default IndexPage
