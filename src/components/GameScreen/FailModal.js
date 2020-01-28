import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";
import Button from "../Button";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const FailBox = styled.div`
  background-color: rgba(235, 16, 16, 0.479);
  padding: 3em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;



const FailModal = props => {
  const hideModal = () => {

    props.setFailModal(!props.failModal);

    let shuffle = items.sort((a, b) => {
      return 0.5 - Math.random();
    });
    props.setCurrentItem(shuffle[0]);
    props.setItemVisibility(!props.itemVisibility)
  };

  const handleModal = () => {
    hideModal()
  }

  return (
    <FailBox id="fail" onClick={hideModal}>
      <h2>Uh oh!</h2>
      <h2>
        {props.item.name} go in the {props.item.bin} bin.
      </h2>
      <Image alt={props.item.name} src={props.item.src} />
      <p>Fun fact about {props.item.name}</p>
      <Button handleClick={handleModal} label="Okay"/>
    </FailBox>
  );
};

export default FailModal;
