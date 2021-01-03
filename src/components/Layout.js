import React from 'react';
import Navbar from '../components/Navbar';
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
    padding: 0;
    font-family: "Lato";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    z-index: 0;
    font-size: 100%;
    overflow-x: hidden;
  }
`


const Layout = ({ children }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Groupies</title>
                <link rel="canonical" href="https://groupies.live" />
                
                <link href="https://fonts.googleapis.com/css?family=Bangers:400" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"></link>
            </Helmet>
            <GlobalStyle theme="purple" />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;
