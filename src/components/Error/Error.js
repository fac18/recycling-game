import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { ModalHeader, Spacer } from "../MasterCss";
import { ReactComponent as StarsSvg } from "../../assets/stars.svg";
import { ReactComponent as SpaceOctopus } from "../../assets/space-octopus.svg";

const Container = styled.div`
  background-image: linear-gradient(#060606, #08345c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  z-index: -10;
`;

const Octopus = styled(SpaceOctopus)`
  position: absolute;
  top: 12vh;
  right: 10vw;
`;

const Stars = styled(StarsSvg)`
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
  z-index: 0;
`;

const Error = props => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <ModalHeader>error: 404</ModalHeader>
    
      <ModalHeader>You're out in space!</ModalHeader>
      <Spacer/>
      <Octopus />
      <Stars />
      <Button primary handleClick={goHome} label={"Back to Earth"} />
    </Container>
  );
};

export default Error;
