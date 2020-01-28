import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";

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
  top: 0;
  left: 0;
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

  return (
    <FailBox id="fail" onClick={hideModal}>
      <h2>Uh oh!</h2>
      <h2>
        {props.item.name} go in the {props.item.bin} bin.
      </h2>
      <Image alt={props.item.name} src={props.item.src} />
      <p>Fun fact about {props.item.name}</p>
      <button>OK</button>
    </FailBox>
  );
};

export default FailModal;
