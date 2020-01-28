import React from "react";
import styled from "styled-components";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import { ReactComponent as Heart } from "../../assets/heart-lives.svg";
import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";
import Button from "../Button";
import {
  MessageBox,
  BoxMessage,
  BadgeBox
} from "../MasterCss";


const HowToPlayBox = styled.div`
  background: linear-gradient(180deg, #21B2D3 0%, #7ABEFD 100%), linear-gradient(180deg, #68C2CD 0%, #7ABEFD 100%);   
  padding: 2em;
  position: absolute;
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
`;

const TextH2 = styled.h2`
  font-family: bungee;
  color: white;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  
`;



const HowToPlayModal = ({ handleClose }) => {
  return (
    <HowToPlayBox>
      {/* <section className="modal-main"> */}
        <TextH2>How to play?</TextH2>
        {/* <TextH2>This is how to play the game</TextH2> */}
        <MessageBox><BadgeBox><RecycleBin width="20%" height="70%"/><BoxMessage>Drag and drop items that CAN BE RECYCLED into this bin.</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><BlackBin width="20%" height="70%"/><BoxMessage>Drag and drop items that CANNOT BE RECYCLED into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><CompostBin width="20%" height="70%"/><BoxMessage>Drag and drop items that are FOOD WASTE into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><Heart width="20%" height="70%"/><BoxMessage>These are your LIVES. If you put the item in the wrong bin you lose a life</BoxMessage></BadgeBox></MessageBox>
        <MessageBox><BadgeBox><StarFish width="20%" height="70%" /><BoxMessage>If you put an item in the right bin you get starfish POINT</BoxMessage></BadgeBox></MessageBox>
        {/* {children} */}
        <Button handleClick={handleClose} label="Close"></Button>
      {/* </section> */}
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
