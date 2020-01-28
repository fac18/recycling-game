import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";

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
  color: #ff8a00;
  font-family: "Freckle Face", cursive;
  font-size: 35px;
  text-align: center;
  line-height: 50px;
`;

const TitleBig = styled.h1`
  color: #ff8a00;
  font-family: "Freckle Face", cursive;
  text-align: center;
  font-size: 70px;
  font-weight: bold;
`;

const Octopus = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
`;

const Earth = styled.div`
  position: absolute;
  top: 290px;
  left: -150px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: flex-start;
`;

const Stars = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const LandingScreen = props => {
  const [howToPlayModal, setHowToPlayModal] = React.useState(false);

  const showHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
    console.log("This is inside show modal function ");
  };

  const showFunFactsModal = () => {
    props.setFunFactsModal(!props.funFactsModal);
    console.log("This is inside show modal function ");
  };

  const hideHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
  };

  const hideFunFactsModal = () => {
    props.setFunFactsModal(!props.funFactsModal);
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
      <ButtonContainer>
        <Button handleClick={startGame} label="Let's Play" />
        {howToPlayModal && (
          <HowToPlayModal handleClose={hideHowToPlayModal}></HowToPlayModal>
        )}
        {props.funFactsModal && (
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
