import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";
// import { showFunFactsModal, hideFunFactsModal } from "../../utils/functions";
import { ReactComponent as EarthSvg } from "../../assets/earth.svg";
import { ReactComponent as StarsSvg } from "../../assets/stars.svg";
import { ReactComponent as SpaceOctopus } from "../../assets/space-octopus.svg";

const Container = styled.div`
  background-image: linear-gradient(#060606, #08345c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
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
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vh;
  justify-content: space-between;
`;

const Stars = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const LandingScreen = props => {
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
      <Button handleClick={startGame} label="Let's Play"></Button>
      <ButtonContainer>
        {props.howToPlayModal && (
          <HowToPlayModal
            handleClose={props.hideHowToPlayModal}
          ></HowToPlayModal>
        )}
        {props.funFactsModal && (
          <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
        )}
        <Button
          type="button"
          handleClick={props.showHowToPlayModal}
          label="How To Play"
        ></Button>
        <Button
          type="button"
          handleClick={props.showFunFactsModal}
          label="Fun Facts"
        ></Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingScreen;
