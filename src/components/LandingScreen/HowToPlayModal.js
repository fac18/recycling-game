import React from "react";
import styled from "styled-components";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import { ReactComponent as Heart } from "../../assets/heart-lives.svg";
import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";
import { ReactComponent as Cross } from "../../assets/x-button.svg";

import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  BadgeBox,
  OrangeText
} from "../MasterCss";


const HowToPlayBox = styled.div`
background-image: linear-gradient(#21b2d3, #7abefd);
padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
`;

const HowToPlayModal = ({ handleClose }) => {
  return (
    <HowToPlayBox>
      {/* <section className="modal-main"> */}

        <PageHeader>How to play</PageHeader>
        {/* <TextH2>This is how to play the game</TextH2> */}
        <MessageBox><BadgeBox><RecycleBin width="20%" height="70%"/><BoxMessage>Drag and drop items that <OrangeText>CAN BE RECYCLED</OrangeText> into this bin.</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><BlackBin width="20%" height="70%"/><BoxMessage>Drag and drop items that <OrangeText>CANNOT BE RECYCLED</OrangeText> into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><CompostBin width="20%" height="70%"/><BoxMessage>Drag and drop items that are <OrangeText>FOOD WASTE</OrangeText> into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><Heart width="20%" height="70%"/><BoxMessage>These are your <OrangeText>LIVES</OrangeText>. If you put the item in the wrong bin you lose a life</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><StarFish width="20%" height="70%" /><BoxMessage>If you put an item in the right bin you get starfish POINT</BoxMessage></BadgeBox></MessageBox>
      <Cross onClick={handleClose} />

        {/* {children} */}
        <Button primary handleClick={handleClose} label="Close"></Button>
      {/* </section> */}
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
