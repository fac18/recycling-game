import React from "react";
// import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";

import { ReactComponent as NightBackground } from "../../assets/night-background.svg";
import { ReactComponent as Earth } from "../../assets/earth.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";

const LandingScreen = props => {
  const [howToPlayModal, setHowToPlayModal] = React.useState(false);

  const showModal = () => {
    setHowToPlayModal(!howToPlayModal);
    console.log("This is inside show modal function ");
  };

  const hideModal = () => {
    setHowToPlayModal(!howToPlayModal);
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
        <HowToPlayModal
          show={props.show}
          handleClose={hideModal}
        ></HowToPlayModal>
      )}
      <Button type="button" handleClick={showModal}>
        CLICK
      </Button>
    </div>
  );
};

export default LandingScreen;
