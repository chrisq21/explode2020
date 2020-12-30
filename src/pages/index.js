import * as React from "react"
import styled from '@emotion/styled'
import '../global.css'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
`
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Explode 2020 🎉🎉🎉</title>
     <PageWrapper>
       <p>Description</p>
     </PageWrapper>
    </main>
  )
}

export default IndexPage
