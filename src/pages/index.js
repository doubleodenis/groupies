import * as React from "react";
import styled from "styled-components"
import Layout from "../components/Layout";
import Hero from '../components/Hero';

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
      <Layout staticNav>
        <Hero>

        </Hero>
      </Layout>
    </main>
  )
}

export default IndexPage
