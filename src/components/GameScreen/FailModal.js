import React from "react";
import styled from "styled-components";
import items from "../../utils/itemData";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const FailBox = styled.div`
  display: none;
`;


const FailModal = props => {
  const hideModal = () => {
    const box = document.getElementById("fail");
    box.style.display = "none";
    let shuffle = items.sort((a, b) => {
      return 0.5 - Math.random();
    });
    props.setCurrentItem(shuffle[0]);
    let item = document.querySelector(".ddcontainer");
    item.style.visibility = "visible";

    props.setItemVisibility(true);
    console.log("modal hid", props.itemVisibility);
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
