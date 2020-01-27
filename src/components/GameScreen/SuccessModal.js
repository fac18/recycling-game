import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";
import UIfx from "uifx"
import clickMp3 from "./sounds/finger-snap.mp3"

const click = new UIfx(clickMp3);

// click.play();

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const SuccessBox = styled.div`
  background-color: rgba(23, 235, 16, 0.479);
  padding: 3em;
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

  return (
    <SuccessBox id="success" onClick={hideModal}>
      <h2>Well Done!</h2>
      <h2>
        {props.item.name} go in the {props.item.bin} bin.
      </h2>
      <Image alt={props.item.name} src={props.item.src} />
      <p>Fun fact about {props.item.name}</p>
      <button onClick={() => {click.play()}}>OK</button>
    </SuccessBox>
  );
};

export default SuccessModal;
