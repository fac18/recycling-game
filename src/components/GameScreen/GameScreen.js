import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import OptionsModal from "./OptionsModal";
import Item from "./Item";
import LivesScore from "./LivesScore";
import styled from "styled-components";
import { Container } from "../MasterCss";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";
import FunFactsModal from "../LandingScreen/FunFacts";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as PauseIcon } from "../../assets/pause-icon.svg";
import { ReactComponent as Wave2 } from "../../assets/sea-wave-2.svg";
import { ReactComponent as Wave3 } from "../../assets/sea-wave-3.svg";
import { ReactComponent as Wave4 } from "../../assets/sea-wave-4.svg";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import { ReactComponent as Wave5 } from "../../assets/sea-wave-5.svg";
import { ReactComponent as Scallop } from "../../assets/scallop.svg";
import { ReactComponent as Algae1 } from "../../assets/algae-1.svg";
import { ReactComponent as Algae2 } from "../../assets/algae-2.svg";
import { ReactComponent as Algae3 } from "../../assets/algae-3.svg";
import { ReactComponent as Crab } from "../../assets/crab.svg";
import { ReactComponent as Seahorse } from "../../assets/seahorse.svg";
import { ReactComponent as RedFish } from "../../assets/red-fish.svg";
import { ReactComponent as Bubbles } from "../../assets/bubbles.svg";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Wave5Div = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: -40px;
  left: 0;
`;

const Wave4Div = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 50px;
  left: 0;
`;

const Wave3Div = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 20px;
  left: 0;
`;

const Wave2Div = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0px;
  left: 0;
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 8%;
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  margin-left: -107px;
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  right: 8%;
`;

const GameItem = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  margin-left: -50px;
`;

const Algae1Box = styled.div`
  position: fixed;
  left: 81.66%;
  right: 15.33%;
  top: 86.21%;
  bottom: 0;
  z-index: 900;
`;

const Algae2Box = styled.div`
  position: fixed;
  left: 8.79%;
  right: 83.42%;
  top: 85.37%;
  bottom: -0.36%;
  z-index: 900;
`;

const Algae3Box = styled.div`
  position: fixed;
  left: 43.3%;
  right: 40.37%;
  top: 91.13%;
  bottom: -12.71%;
  z-index: 900;
`;

const ScallopBox = styled.div`
  position: fixed;
  width: 83.6px;
  height: 70.56px;
  right: 20px;
  bottom: 40px;
  z-index: 900;
`;

const CrabBox = styled.div`
  position: fixed;
  width: 98.54px;
  height: 87.07px;
  left: 22px;
  bottom: 30px;
  z-index: 900;
`;

const SeahorseBox = styled.div`
  position: fixed;
  left: 16.86%;
  right: 76.57%;
  bottom: -3%;
  z-index: 900;
`;

const BubblesBox = styled.div`
  position: fixed;
  width: 51.27px;
  height: 75.69px;
  right: 15%;
  bottom: 40px;
  z-index: 901;
`;

const RedFishBox = styled.div`
  position: fixed;
  left: 72.53%;
  right: 21.87%;
  bottom: 0.79%;
  z-index: 900;
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  position: fixed;
  bottom: 2%;
  margin: 0;
`;

const PauseBox = styled.div`
  justify-self: flex-start;
`;

const GameScreen = props => {
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: "images/wine-bottle.svg",
    bin: "recycling",
    fact: "Families use around 330 glass bottles and jars every year"
  });
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [optionsModal, setOptionsModal] = React.useState(false);

  const dropReaction = currentBin => {
    setItemVisibility(!itemVisibility);

    if (currentItem.bin === currentBin) {
      setSuccessModal(!successModal);
      props.setCount(props.count + 1);
    } else {
      setFailModal(!failModal);
      props.setBadCount(props.badCount + 1);
    }
  };

  const showOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  return (
    <Container key="rendering">
      {successModal && (
        <SuccessModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          successModal={successModal}
          setSuccessModal={setSuccessModal}
        />
      )}
      {failModal && (
        <FailModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          failModal={failModal}
          setFailModal={setFailModal}
          badCount={props.badCount}
        />
      )}
      {optionsModal && (
        <OptionsModal
          optionsModal={optionsModal}
          setOptionsModal={setOptionsModal}
          setCount={props.setCount}
          setBadCount={props.setBadCount}
          funFactsModal={props.funFactsModal}
          setFunFactsModal={props.setFunFactsModal}
          howToPlayModal={props.howToPlayModal}
          setHowToPlayModal={props.setHowToPlayModal}
          showFunFactsModal={props.showFunFactsModal}
          hideFunFactsModal={props.hideFunFactsModal}
          hideHowToPlayModal={props.hideHowToPlayModal}
          showHowToPlayModal={props.showHowToPlayModal}
        />
      )}

      {props.howToPlayModal && (
        <HowToPlayModal handleClose={props.hideHowToPlayModal}></HowToPlayModal>
      )}
      {props.funFactsModal && (
        <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
      )}

      <Header>
        <PauseBox>
          <PauseIcon onClick={showOptionsModal} />
        </PauseBox>
        <LivesContainer>
          <LivesScore
            badCount={props.badCount}
            successModal={successModal}
            failModal={failModal}
          />
        </LivesContainer>
        <ProgressScore gameScreen count={props.count} />
      </Header>

      <ScallopBox>
        <Scallop />
      </ScallopBox>
      <Algae1Box>
        <Algae1 />
      </Algae1Box>
      <Algae2Box>
        <Algae2 />
      </Algae2Box>
      <Algae3Box>
        <Algae3 />
      </Algae3Box>
      <CrabBox>
        <Crab />
      </CrabBox>
      <SeahorseBox>
        <Seahorse />
      </SeahorseBox>
      <RedFishBox>
        <RedFish />
      </RedFishBox>
      <BubblesBox>
        <Bubbles />
      </BubblesBox>
      <Wave2Div>
        <Wave2 />
      </Wave2Div>
      <Wave3Div>
        <Wave3 />
      </Wave3Div>
      <Wave4Div>
        <Wave4 />
      </Wave4Div>

      <GameItem>
        <DragDropContainer targetKey="bins">
          {itemVisibility && (
            <Item
              item={currentItem}
              itemVisibility={itemVisibility}
              setItemVisibility={setItemVisibility}
            />
          )}
        </DragDropContainer>
      </GameItem>

      <BlackBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("general waste");
          }}
        >
          <BlackBin title="blackbin" />
        </DropTarget>
      </BlackBinBox>

      <RecycleBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("recycling");
          }}
        >
          <RecycleBin title="recyclebin" />
        </DropTarget>
      </RecycleBinBox>

      <CompostBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("food compost");
          }}
        >
          <CompostBin title="compostbin" />
        </DropTarget>
      </CompostBinBox>

      <Wave5Div>
        <Wave5 />
      </Wave5Div>

      <ItemText>{currentItem.name}</ItemText>
    </Container>
  );
};

export default GameScreen;
