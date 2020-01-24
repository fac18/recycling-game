import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import Item from "./Item";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";

import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";

import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";

const GameScreen = () => {
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: "images/wine-bottle.svg",
    bin: "recycling"
});

React.useEffect(() => {
  console.log("updated itemvis", itemVisibility)
}, [itemVisibility])

  const dropReactionRecycling = (e) => {
    
    setItemVisibility(false)   

    e.containerElem.style.visibility = "hidden";
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    if (currentItem.bin === "recycling") {

    success.style.display = "block";
    setCount(count + 1);
    } else {
      fail.style.display = "block";
    }

  };

  const dropReactionBlack = (e) => {
    setItemVisibility(false);
  
    console.log("after drop", itemVisibility);

    e.containerElem.style.visibility = "hidden";
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    if (currentItem.bin === "general waste") {
    success.style.display = "block";
    setCount(count + 1);
    } else {
      fail.style.display = "block";
    }

  };

  const dropReactionCompost = (e) => {
    setItemVisibility(false);

    console.log("after drop", itemVisibility);

    e.containerElem.style.visibility = "hidden";
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    if (currentItem.bin === "food composting") {
    success.style.display = "block";
    setCount(count + 1);

    } else {
      fail.style.display = "block";

    }
    

  };

  return (
    <div>
      <ProgressScore count={count} />
      <DragDropContainer targetKey="bins">
        <Item 
        item={currentItem} 
        itemVisibility={itemVisibility}
        setItemVisibility={setItemVisibility}
        />
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

      <SuccessModal
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      setItemVisibility={setItemVisibility}
      />
      <FailModal 
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      setItemVisibility={setItemVisibility}
      />
    </div>
  );
};

export default GameScreen;
