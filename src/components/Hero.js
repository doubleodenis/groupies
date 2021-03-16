import React from "react";
import styled from "styled-components";

const Background = styled.div`
    background-image: url(/groupies-group-camping-optimized.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = styled.h1`
    font-size: 72px;
    font-weight: bold;
    color: white;
`;
const Hero = ({children}) => {
    return (
        <Background >
            
            <Header>Groupies</Header>

        </Background>        
    )
}

export default Hero;