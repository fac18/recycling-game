import React from "react";
import ProgressScore from "./ProgressScore";
import Success from "./SuccessModal";
import Fail from "./FailModal";
import Item from "./Item";
import LivesScore from "./LivesScore";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";

import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";

import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import { ReactComponent as Heart1 } from "../../assets/heart-lives.svg";
import { ReactComponent as Heart2 } from "../../assets/heart-lives.svg";
import { ReactComponent as Heart3 } from "../../assets/heart-lives.svg";

const GameScreen = () => {
  const heartArray = [Heart1, Heart2, Heart3];
  const removeHeart = () => {
    const x = document.querySelector(".heart");
    heartArray.shift();
    x.style.display = "none";
    console.log("second");
  };
  const [itemVisibility, setItemVisibility] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: "images/wine-bottle.svg",
    bin: "recycling"
  });

  const dropReactionRecycling = e => {
    e.containerElem.style.visibility = "hidden";
    setItemVisibility(e.containerElem.style.visibility);
    console.log(itemVisibility);
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    console.log(currentItem.bin);
    if (currentItem.bin === "recycling") {
      success.style.display = "block";
      setCount(count + 1);
    } else {
      removeHeart();
      fail.style.display = "block";
    }
  };

  const dropReactionBlack = e => {
    e.containerElem.style.visibility = "hidden";
    setItemVisibility(e.containerElem.style.visibility);
    console.log(itemVisibility);
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    console.log(currentItem.bin);
    if (currentItem.bin === "general waste") {
      success.style.display = "block";
      setCount(count + 1);
    } else {
      removeHeart();
      fail.style.display = "block";
    }
  };

  const dropReactionCompost = e => {
    e.containerElem.style.visibility = "hidden";
    setItemVisibility(e.containerElem.style.visibility);
    console.log(itemVisibility);
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    console.log(currentItem.bin);
    if (currentItem.bin === "food composting") {
      success.style.display = "block";
      setCount(count + 1);
    } else {
      removeHeart();
      fail.style.display = "block";
    }
  };

  return (
    <div>
      <ProgressScore count={count} />
      <LivesScore />
      <DragDropContainer targetKey="bins">
        <Item item={currentItem} />
      </DragDropContainer>

      <DropTarget targetKey="bins" onHit={dropReactionBlack}>
        <BlackBin title="blackbin" />
      </DropTarget>

      <DropTarget targetKey="bins" onHit={dropReactionRecycling}>
        <RecycleBin title="recyclebin" />
      </DropTarget>

      <DropTarget targetKey="bins" onHit={dropReactionCompost}>
        <CompostBin title="compostbin" />
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
