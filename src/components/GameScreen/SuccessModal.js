import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";
import Button from "../Button";
import * as SC from "../MasterCss";
import UIfx from "uifx";
import successSound from "../../assets/sounds/hero_decorative-celebration-02.mp3";

const SuccessBox = styled.div`
  background-color: rgba(36, 174, 95, 0.7);
  padding: 3em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  padding: 0px;
`;

const SuccessModal = props => {
  const successUIFX = new UIfx(successSound)
  successUIFX.play()
  const hideModal = () => {
    props.setSuccessModal(!props.successModal);

    let shuffle = items.sort((a, b) => {
      return 0.5 - Math.random();
    });
    props.setCurrentItem(shuffle[0]);
    props.setItemVisibility(!props.itemVisibility);
  };

  const handleModal = () => {
    hideModal();
  };

  return (
    <SuccessBox id="success" onClick={hideModal}>
      <SC.ModalHeader>Well Done!</SC.ModalHeader>
      <SC.ModalHeader>
        <SC.OrangeText>{props.item.name} </SC.OrangeText> go in the <SC.OrangeText> {props.item.bin}</SC.OrangeText> bin.
      </SC.ModalHeader>
      <SC.BadgeBox>
        
        <SC.MessageBox expandd>
        <SC.MessageImage alt={props.item.name} src={props.item.src} />
        <SC.BoxMessage>{props.item.fact}</SC.BoxMessage>
        </SC.MessageBox>
      </SC.BadgeBox>
      <Button primary handleClick={handleModal} label="OK" />
    </SuccessBox>
  );
};

export default SuccessModal;
