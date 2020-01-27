import React from "react";
// import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";

import { ReactComponent as NightBackground } from "../../assets/night-background.svg";
import { ReactComponent as Earth } from "../../assets/earth.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";

const LandingScreen = () => {
  const [howToPlayModal, setHowToPlayModal] = React.useState(false);
  const [funFactsModal, setFunFactsModal] = React.useState(false);

  const showHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
    console.log("This is inside show modal function ");
  };

  const showFunFactsModal = () => {
    setFunFactsModal(!funFactsModal);
    console.log("This is inside show modal function ");
  };

  const hideHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
  };

  const hideFunFactsModal = () => {
    setFunFactsModal(!funFactsModal);
  };

  const history = useHistory();

  const startGame = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>reduce, reuse, recycle</h1>
      <NightBackground />
      <Stars />
      <Earth />
      <Button handleClick={startGame} label="Let's Play" />
      {howToPlayModal && (
        <HowToPlayModal handleClose={hideHowToPlayModal}></HowToPlayModal>
      )}
      {funFactsModal && (
        <FunFactsModal handleClose={hideFunFactsModal}></FunFactsModal>
      )}
      <Button type="button" handleClick={showHowToPlayModal}>
        CLICK
      </Button>
      <Button type="button" handleClick={showFunFactsModal}>
        CLICK
      </Button>
    </div>
  );
};

export default LandingScreen;
