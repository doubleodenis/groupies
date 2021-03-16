import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Row = styled.div`
  width: 100vw;
  height: 70vh;
  max-height: 100vh;
  display: flex;
`;

const Description = styled.div`
    background-color: #1A3149;
    color: white;
    flex: 4;
    padding: 3em;
    letter-spacing: 1.5px;
    line-height: 22px;
    font-size: 16px;
`;

const MemberRow = ({ children }) => {
  return (
    <Row>
      {/* Picture of person */}
      <StaticImage
        src="../images/lynch.jpg"
        alt="Lynch"
        placeholder="blurred"
        layout="constrained"
        style={{ flex: 5 }}
      />

      {/* Carousel that starts with Members stats (Think tierzoo list) or maybe random "magic attributes"*/}
      <div className="carousel">
        <Description style={{}}>
            Laboris nostrud aliquip esse exercitation dolor non incididunt. Laboris
            nostrud ex labore do magna dolore laboris duis excepteur anim sunt. Et
            eu consectetur sit minim dolor cupidatat et quis minim cillum. Fugiat
            qui id nostrud ad ad laboris duis dolore do fugiat eiusmod adipisicing
            consectetur. Tempor incididunt non aliquip do non elit excepteur in.
            Nulla culpa consequat do aute nulla excepteur eu cillum Lorem minim
            labore voluptate deserunt. Mollit do culpa occaecat voluptate culpa ad
            nisi aliqua.
        </Description>

        {/* Gallery */}

        {/* Character Stats */}
        
      </div>
      
    </Row>
  );
};

export default MemberRow;
