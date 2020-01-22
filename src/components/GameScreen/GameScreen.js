import React from "react";
import ProgressScore from "./ProgressScore";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as RecyclingBin } from "../../assets/recycle-bin.svg";

import { ReactComponent as GlassBottle } from "../../assets/glass-bottle.svg";

const GameScreen = () => {
  const [count, setCount] = React.useState(0);
  const dropReaction = e => {
    e.containerElem.style.visibility = "hidden";
    setCount(count + 1);
  };

  return (
    <div>
      <ProgressScore count={count} />
      <DragDropContainer targetKey="middle">
        <GlassBottle />
      </DragDropContainer>

      <DropTarget targetKey="middle" onHit={dropReaction}>
        <RecyclingBin />
      </DropTarget>
    </div>
  );
};

export default GameScreen;
