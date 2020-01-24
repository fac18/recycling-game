import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import Item from "./Item";

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


const GameScreen = () => {
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: "images/wine-bottle.svg",
    bin: "recycling"
});
const [successModal, setSuccessModal] = React.useState(false);
const [failModal, setFailModal] = React.useState(false);

const [seahorse, setSeahorse] = React.useState(true)


React.useEffect(() => {
  console.log("updated itemvis", itemVisibility)
}, [itemVisibility])

  const dropReactionRecycling = (e) => {
    
    setItemVisibility(false)   


    if(currentItem.bin === "recycling") {
     setSeahorse(!seahorse);
    } 

    // e.containerElem.style.visibility = "hidden";
    // const success = document.getElementById("success");
    // const fail = document.getElementById("fail");
    // if (currentItem.bin === "recycling") {

    // success.style.display = "block";
    // setCount(count + 1);
    // } else {
    //   fail.style.display = "block";
    // }

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
      <Scallop/>
      <Algae1/>
      <Algae2/>
      <Algae3/>
      <Crab/>
      {seahorse && <Seahorse/>}
      {/* <RedFish/>
      <Bubbles/>
      <Wave2/>
      <Wave3/>
      <Wave4/>
      <Wave5/>  */}

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

      {successModal && <SuccessModal
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      setItemVisibility={setItemVisibility}
      />}
      {failModal && <FailModal 
      item={currentItem} 
      setCurrentItem={setCurrentItem}
      itemVisibility={itemVisibility}
      setItemVisibility={setItemVisibility}
      />}
    </div>
  );
};

export default GameScreen;
