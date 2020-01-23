import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";

const SuccessBox = styled.div`
  display: none;
`;

const Success = props => {
  // const newItem = () => {
    
  // };

  const hideModal = () => {
    const box = document.getElementById("success");
    box.style.display = "none";
    let shuffle = items.sort((a, b) => {
      return 0.5 - Math.random();
    });
    props.setCurrentItem(shuffle[0]);
    //newItem();
    let item = document.querySelector(".ddcontainer");
    item.style.visibility = "visible";
  };

  return (
    <SuccessBox id="success" onClick={hideModal}>
      <h2>Well Done!</h2>
      <h2>
        {props.item.name} goes in the {props.item.bin} bin.
      </h2>
      <img alt={props.item.name} src={props.item.src} />
      <p>Fun fact about {props.item.name}</p>
      <button>OK</button>
    </SuccessBox>
  );
};

export default Success;
