import React from "react";
// import styled from "styled-components";

import { ReactComponent as NightBackground } from "../../assets/night-background.svg";
import { ReactComponent as Earth } from "../../assets/earth.svg";
// import { ReactComponent as Title } from "../../assets/reduce, reuse, recycle.svg";
import { ReactComponent as PlayButton } from "../../assets/play-button-purple.svg";
import { ReactComponent as HowToPLay } from "../../assets/button-secondary.svg";
import { ReactComponent as FunFacts } from "../../assets/button-secondary.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";

const LandingScreen = () => {
  return (
    <div>
      <h1>reduce, reuse, recycle</h1>
      <NightBackground />
      <Stars />
      <PlayButton />
      <Earth />
      <HowToPLay />
      <FunFacts />
    </div>
  );
};

export default LandingScreen;
