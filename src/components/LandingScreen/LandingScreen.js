import React from "react";
// import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";

import { ReactComponent as NightBackground } from "../../assets/night-background.svg";
import { ReactComponent as Earth } from "../../assets/earth.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";

const LandingScreen = () => {
  const history = useHistory();
  const startGame = () => {
    history.push("/");
  };

  // const goToFunFacts = () => {
  //   history.push("/fun-facts");
  // };

  // const goToHowToPlay = () => {
  //   history.push("/how-to-play");
  // };

  return (
    <div>
      <h1>reduce, reuse, recycle</h1>
      <NightBackground />
      <Stars />
      <Earth />
      <Button handleClick={startGame} label="Let's Play" />
      {/* <Button handleClick={goToFunFacts} label="Let's Play" />
      <Button handleClick={goToHowToPlay} label="Let's Play" /> */}
    </div>
  );
};

export default LandingScreen;
