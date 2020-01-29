import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";

import { ReactComponent as EarthSvg } from "../../assets/earth.svg";
import { ReactComponent as StarsSvg } from "../../assets/stars.svg";
import { ReactComponent as SpaceOctopus } from "../../assets/space-octopus.svg";

import UIfx from "uifx";
import kahootMusic from "../../../src/assets/sounds/Kahoot Lobby Music (HD).mp3";

const music = new UIfx(kahootMusic);
music.play(0.5);


const Container = styled.div`
  background-image: linear-gradient(#060606, #08345c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  z-index: -10;
`;

const Title = styled.h1`
  background-color: #ff8a00;
  font-family: "Freckle Face", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  text-align: center;
  line-height: 130px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

const TitleBig = styled.h1`
  background-color: #ff8a00;
  font-family: "Freckle Face", cursive;
  text-align: center;
  font-size: 110px;
  font-weight: bold;
  // -webkit-text-stroke: 1px black;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const Octopus = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
`;

const Earth = styled.div`
  position: absolute;
  bottom: 0px;
  left: -150px;
  overFlow: hidden;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vh;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

// const Stars = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   height: 100vh;
//   width: 100vw;
//   z-index: 1;
// `;

const Stars = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
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
    history.push("/game");
  };


  return (
    <Container>
      <Title>
        reduce, reuse,<TitleBig>recycle!</TitleBig>
      </Title>
      <Octopus>
        <SpaceOctopus />
      </Octopus>
      <Stars>
        <StarsSvg />
      </Stars>
      <Earth>
        <EarthSvg />
      </Earth>
      <Button type="button" handleClick={startGame} label="Let's Play!"></Button>
      <ButtonContainer>
        {howToPlayModal && (
          <HowToPlayModal handleClose={hideHowToPlayModal}></HowToPlayModal>
        )}
        {funFactsModal && (
          <FunFactsModal handleClose={hideFunFactsModal}></FunFactsModal>
        )}
        <Button
          type="button"
          handleClick={showHowToPlayModal}
          label="How To Play"
        ></Button>
        <Button
          type="button"
          handleClick={showFunFactsModal}
          label="Fun Facts"
        ></Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingScreen;
