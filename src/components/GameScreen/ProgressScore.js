import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 28vw;
  padding-right: 20px;

  ${props => props.results && css`
  justify-content: center;
  padding: 0;
  `}
`;

const Score = styled.p`
font-family: Bungee;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 77px;
/* identical to box height */
color: #FF8A00;
-webkit-text-stroke: 2px #000000;
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
margin: 20px;
`;

const ProgressScore = props => {
  return (
    <ScoreContainer results={props.results}>
      <Score>{props.count}</Score>
      <StarFish />
    </ScoreContainer>
  );
};

export default ProgressScore;
