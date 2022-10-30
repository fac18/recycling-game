import React from "react";
import styled, { css } from "styled-components";

import  starFish from "../../assets/starfish-smile.svg";
import { IconImage } from "../MasterCss";
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%
  padding-right: 1vw;

  ${props => props.results && css`
  padding: 0;
  `}
`;

const Score = styled.p`
font-family: Bungee;
font-style: normal;
font-weight: normal;
font-size: 6vh;
margin: 0;
margin-top: 0.6rem;
margin-right: 0.4rem;
/* identical to box height */
color: #FF8A00;
-webkit-text-stroke: 2px #000000;
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 480px) {
    font-size: 5vh;
    margin-top: 0;
  }
`;

const ProgressScore = props => {
  return (
    <ScoreContainer results={props.results}>
      <Score>{props.count}</Score>
      <IconImage game src={starFish}/>
    </ScoreContainer>
  );
};

export default ProgressScore;
