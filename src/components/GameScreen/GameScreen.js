import React from "react";
import ProgressScore from "./ProgressScore";
import Success from "./SuccessModal";
import Fail from "./FailModal";
import Item from "./Item";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as RecyclingBin } from "../../assets/recycle-bin.svg";


const GameScreen = () => {
  const [itemVisibility, setItemVisibility] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottle",
    src: "images/wine-bottle.png",
    bin: "recycling"
});

  const dropReaction = (e) => {
    e.containerElem.style.visibility = "hidden";
    setItemVisibility(e.containerElem);
    const success = document.getElementById("success");
    //const fail = document.getElementById("fail");

    success.style.display = "block";
    setCount(count + 1);
  };

  return (
    <div>
      <ProgressScore count={count} />
      <DragDropContainer targetKey="middle">
        <Item item={currentItem} />
      </DragDropContainer>

      <DropTarget targetKey="middle" onHit={dropReaction}>
        <RecyclingBin />
      </DropTarget>

      <Success 
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      />
      <Fail 
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      />
    </div>
  );
};

export default GameScreen;
