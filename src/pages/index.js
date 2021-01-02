import * as React from "react";
import styled from "styled-components"
import Layout from "../components/Layout";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        test
      </Layout>
    </main>
  )
}

export default IndexPage
