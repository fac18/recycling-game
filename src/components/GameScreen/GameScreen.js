import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import Item from "./Item";
import LivesScore from "./LivesScore";
import styled from "styled-components";
import { Container } from "../MasterCss";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

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

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  position: fixed;
  top: 25px;
  right: 200px;
`;

const Wave5Div = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: -10px;
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



const GameScreen = props => {

  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: "images/wine-bottle.svg",
    bin: "recycling"
  });
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [badCount, setBadCount] = React.useState(0);

  const dropReaction = currentBin => {
    setItemVisibility(!itemVisibility);

    if (currentItem.bin === currentBin) {
      setSuccessModal(!successModal);
      props.setCount(props.count + 1);
    } else {
      setFailModal(!failModal);
      setBadCount(badCount + 1);
    }
  };

  return (
    <Container key="rendering">
      <Scallop />
      <Algae1 />
      <Algae2 />
      <Algae3 />
      <Crab />
      <Seahorse />
      <RedFish />
      <Bubbles />
      <Wave2Div><Wave2 /></Wave2Div>
      <Wave3Div><Wave3 /></Wave3Div>
      <Wave4Div><Wave4 /></Wave4Div>
      <Wave5Div><Wave5 /></Wave5Div>

      <ProgressScore gameScreen count={props.count} />
      <LivesContainer>
      <LivesScore badCount={badCount} />
      </LivesContainer>

      <DragDropContainer targetKey="bins">
        {itemVisibility && (
          <Item
            item={currentItem}
            itemVisibility={itemVisibility}
            setItemVisibility={setItemVisibility}
          />
        )}
      </DragDropContainer>

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
        />
      )}

      <DropTarget
        targetKey="bins"
        onHit={() => {
          dropReaction("general waste");
        }}
      >
        <BlackBin title="blackbin" />
      </DropTarget>

      <DropTarget
        targetKey="bins"
        onHit={() => {
          dropReaction("recycling");
        }}
      >
        <RecycleBin title="recyclebin" />
      </DropTarget>

      <DropTarget
        targetKey="bins"
        onHit={() => {
          dropReaction("food composting");
        }}
      >
        <CompostBin title="compostbin" />
      </DropTarget>

      <div className="sharethis-inline-share-buttons"></div>

    </Container>
  );
};

export default GameScreen;
