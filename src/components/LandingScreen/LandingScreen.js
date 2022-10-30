import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";
import { spinscale } from "../Keyframes";

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
  z-index: -10;
`;
const ButtonWrapper = styled.div`
  text-align: center;
`

const Spacer = styled.div`
width: 2.5vw;
padding-bottom:5.5vh;
`
const Title = styled.h1`
  background-color: #ff8a00;
  font-family: "Freckle Face", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 9vh;
  text-align: center;
  line-height: 9vh;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin-bottom: 0;
  position: relative;
  top: 10%;
  z-index: 5;
  @media (max-width: 480px) {
    font-size: 5vh;
    line-height: 7vh;;
  }
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
  width: 100vw;
  justify-content: center;
  margin-bottom: 0.5em;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  overflow: hidden;
  animation: ${ spinscale } 4s linear infinite alternate;
`;

const LandingScreen = props => {
  const history = useHistory();
  const isMobileScreen = window.matchMedia('screen and (max-width: 768px)').matches;
  const startGame = () => {
   history.push("/game")
  };

  return (
    
    <Container>
      <Title>reduce, reuse, recycle!</Title>


      <Octopus>
        <SpaceOctopus />
      </Octopus>
      <Stars>
        <StarsSvg />
      </Stars>
      <Earth>
        <EarthSvg />
      </Earth>
      {!isMobileScreen && <Spacer/> }
      <ButtonWrapper>
        <Button
          primaryR
          type="button"
          renderAs="button"
          handleClick={startGame}
          label="Let's Play!"
        ></Button>
        <Spacer/>
        {!isMobileScreen && <Spacer/> }
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
          <Spacer/>
          <Button
            type="button"
            handleClick={props.showFunFactsModal}
            label="Fun Facts"
          ></Button>
        </ButtonContainer>
      </ButtonWrapper>
      <Spacer/>
    </Container>
   
    
  );
};

export default LandingScreen;
