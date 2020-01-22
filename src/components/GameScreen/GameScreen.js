import React from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import {
  ReactComponent as CoffeeCup
  } from '../../assets/coffee-cup.svg';

import {
  ReactComponent as RecyclingBin
  } from '../../assets/recycle-bin.svg';


const GameScreen = () => {
  return (
    // <div>
    //   <h2>This is the Game in action</h2>
    // </div>
    <div>
      <DragDropContainer targetKey="middle" >
          <div> < CoffeeCup /> </div>
      </DragDropContainer>

      <DropTarget targetKey="middle" >
          <div> < RecyclingBin /> </div>
      </DropTarget>
    </div>

  );
};

export default GameScreen;
