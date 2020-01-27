import React from "react";
import styled from "styled-components";

import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20vw;
`;

const Score = styled.p`
  font-size: 6em;
  margin: 0;
`;

const ProgressScore = props => {
  return (
    <ScoreContainer>
      <Score>{props.count}</Score>
      <StarFish />
    </ScoreContainer>
  );
};

export default ProgressScore;
