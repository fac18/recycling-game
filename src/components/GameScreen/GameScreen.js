import React from "react";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as RecyclingBin } from "../../assets/recycle-bin.svg";

import { ReactComponent as GlassBottle } from "../../assets/glass-bottle.svg";

const GameScreen = () => {
  const dropReaction = e => {
    e.containerElem.style.visibility = "hidden";
  };

  return (
    <div>
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
