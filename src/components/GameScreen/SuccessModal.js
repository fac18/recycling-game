import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";
import Button from "../Button";
import {
  MessageBox,
  BadgeBox,
  BoxMessage,
  ModalHeader,
  MessageImage
} from "../MasterCss";

const SuccessBox = styled.div`
  background-color: rgba(36, 174, 95, 0.7);
  padding: 3em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1500;
  padding: 0px;
`;

const SuccessModal = props => {
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
      <ModalHeader>Well Done!</ModalHeader>
      <ModalHeader>
        {props.item.name} go in the {props.item.bin} bin.
      </ModalHeader>
      <BadgeBox>
        
        <MessageBox>
        <MessageImage alt={props.item.name} src={props.item.src} />
        <MessageImage bin alt="Image of the correct bin" src={props.item.binImg}/>
        <BoxMessage>{props.item.fact}</BoxMessage>
        </MessageBox>
      </BadgeBox>
      <Button primary handleClick={handleModal} label="OK" />
    </SuccessBox>
  );
};

export default SuccessModal;
