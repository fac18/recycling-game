import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import {
  MessageBox,
  BadgeBox,
  BoxMessage,
  ModalHeader,
  MessageImage
} from "../MasterCss";

const FailBox = styled.div`
  background-color: rgba(235, 16, 16, 0.7);
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

const FailModal = props => {
  const hideModal = () => {
    props.setFailModal(!props.failModal);

    let shuffle = items.sort((a, b) => {
      return 0.5 - Math.random();
    });
    props.setCurrentItem(shuffle[0]);
    props.setItemVisibility(!props.itemVisibility);
  };

  const history = useHistory();
  const handleModal = () => {
    hideModal();
    if (props.badCount === 3) {
      history.push("/results");
    }
  };

  return (
    <FailBox id="fail" onClick={hideModal}>
      <ModalHeader>Uh Oh!</ModalHeader>
      <ModalHeader>
        {props.item.name} go in the {props.item.bin} bin.
      </ModalHeader>
      <BadgeBox>
        <MessageBox>
          <MessageImage alt={props.item.name} src={props.item.src} />
          <BoxMessage>{props.item.fact}</BoxMessage>
        </MessageBox>
      </BadgeBox>
      <Button primary handleClick={handleModal} label="OK" />
    </FailBox>
  );
};

export default FailModal;
