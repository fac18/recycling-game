import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";

const OptionsList = styled.ul`
  list-style-type: none;
  margin: 25px;
  padding: 0;
`;

const OptionsListItem = styled.li`
  font-family: Signika;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  align-items: center;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
  line-height: 2;
`;

const OptionsBox = styled.div`
  background-color: #08345c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 25px;
  padding-bottom: 25px;
  z-index: 2000;
  margin: 0;
  border-radius: 0px 0px 25px 0px;
`;

const OptionsModal = props => {
  const hideOptionsModal = () => {
    props.setOptionsModal(!props.optionsModal);
  };

  const history = useHistory();

  const quitGame = () => {
    props.setCount(0);
    props.setBadCount(0);
    history.push("/");
  };

  return (
    <OptionsBox>
      <PlayIcon onClick={hideOptionsModal} />
      <OptionsList>
        <OptionsListItem onClick={props.showHowToPlayModal}>How to play</OptionsListItem>
        <OptionsListItem onClick={props.showFunFactsModal}>Recycling Information</OptionsListItem>
        <OptionsListItem onClick={quitGame}>Quit</OptionsListItem>
      </OptionsList>
    </OptionsBox>
  );
};

export default OptionsModal;