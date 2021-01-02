import React from 'react';
import Navbar from '../components/Navbar';
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
    padding: 0;
    font-family: "Roboto";
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
            <GlobalStyle theme="purple" />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;
