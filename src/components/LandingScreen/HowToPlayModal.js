import React from "react";
import styled from "styled-components";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import heart from "../../assets/heart-lives.svg";
// import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";
import  starFish  from "../../assets/starfish-smile.svg";
import crossButton from "../../assets/x-button.svg";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  BadgeBox,
  OrangeText,
  CloseCross,
  IconImage,
  Spacer
} from "../MasterCss";


const HowToPlayBox = styled.div`
// background-image: linear-gradient(#21b2d3, #7abefd);
// padding: 2em;
//   position: fixed;
//   width: 90vw;
//   height: 85vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   overflow: scroll;
//   z-index: 3000;
//   border-radius: 25px;
//   border: 2px solid #08345C;
//   filter: drop-shadow(4px 4px 4px #08345C);


  background-image: linear-gradient(#21b2d3, #7abefd);
  // padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  z-index: 3000;
  border-radius: 1em;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
  @media (max-width: 480px) {
    padding-bottom: 13.4vh;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 `;

const CenterChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HowToPlayModal = ({ handleClose }) => {
  const svgSize = window.matchMedia('screen and (max-width: 768px)').matches ? '20%' : '8rem';
  return (
    <HowToPlayBox>
        <HeaderWrapper>
          <CloseCross onClick={handleClose} src={crossButton}/>
          <PageHeader>How to play</PageHeader>
        </HeaderWrapper>
        <CenterChildren>
        <MessageBox ><BadgeBox><RecycleBin width="20%" height={svgSize}/><BoxMessage>Drag and drop items that <OrangeText>CAN BE RECYCLED</OrangeText> into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><BlackBin width="20%" height={svgSize}/><BoxMessage>Drag and drop items that <OrangeText>CANNOT BE RECYCLED</OrangeText> into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><CompostBin width="20%" height={svgSize}/><BoxMessage>Drag and drop items that are <OrangeText>FOOD WASTE</OrangeText> into this bin</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={heart}/><BoxMessage>These are your <OrangeText>LIVES</OrangeText>. If you put the item in the wrong bin you lose a life</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={starFish}/><BoxMessage>If you put an item in the right bin you get a <OrangeText>STARFISH POINT</OrangeText>!</BoxMessage></BadgeBox></MessageBox>
        </CenterChildren>

        <Button primary handleClick={handleClose} label="Close"></Button>
        <Spacer/>
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
