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
  background-color: rgba(23, 235, 16, 0.479);
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
        <MessageImage alt={props.item.name} src={props.item.src} />
        <MessageBox>
          <BoxMessage>Fun fact about {props.item.name}</BoxMessage>
        </MessageBox>
      </BadgeBox>
      <Button primary handleClick={handleModal} label="Okay" />
    </SuccessBox>
  );
};

export default SuccessModal;
