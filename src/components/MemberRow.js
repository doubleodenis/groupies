import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import CharacterStats from "./CharacterStats";


const Row = styled.div`
  width: 100vw;
  height: 70vh;
  max-height: 750px;
  display: flex;
`;

const Description = styled.div`
  padding: 3em;
  letter-spacing: 1.5px;
  line-height: 30px;
  font-size: 16px;
`;

const Carousel = styled.div`
  flex: 4;
  background-color: #1a3149;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberRow = ({ imagePath, description, stats }) => {
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
      <Carousel>
        <Description style={{}}>
          Laboris nostrud aliquip esse exercitation dolor non incididunt.
          Laboris nostrud ex labore do magna dolore laboris duis excepteur anim
          sunt. Et eu consectetur sit minim dolor cupidatat et quis minim
          cillum. Fugiat qui id nostrud ad ad laboris duis dolore do fugiat
          eiusmod adipisicing consectetur. Tempor incididunt non aliquip do non
          elit excepteur in. Nulla culpa consequat do aute nulla excepteur eu
          cillum Lorem minim labore voluptate deserunt. Mollit do culpa occaecat
          voluptate culpa ad nisi aliqua.
        </Description>

        {/* Gallery */}

        {/* Character Stats */}
        <div style={{ width: 500, display: 'flex', alignItems: "center" }}>

          <CharacterStats stats={[3, 4, 7, 1, 9]} />
        </div>
      </Carousel>
    </Row>
  );
};

export default MemberRow;
