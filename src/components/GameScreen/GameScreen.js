import React from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
// import Item from './Item';
// import Bin from './Bin';
import {
  ReactComponent as CoffeeCup
  } from '../../assets/coffee-cup.svg';

import {
  ReactComponent as RecyclingBin
  } from '../../assets/recycle-bin.svg';


const GameScreen = () => {
  return (
    <div>
      {/* <div>
        <Item targetKey="middle">
          <CoffeeCup/>
        </Item>
      </div>

    <div>
      < Bin targetKey="middle">
         < RecyclingBin />
      </Bin>
    </div> */}

      <DragDropContainer targetKey="middle" >
        
          <div> <h1>HELLO JAMIE</h1> </div>
         
      </DragDropContainer>

      <DropTarget targetKey="middle"> 
          <div> <RecyclingBin/> </div>
      </DropTarget>



    </div>

//     <DragDropContainer 
//     targetKey="middle" 
//     // dragData={some object} 
//     onDrop={some method}
//     onDragStart={some method} 
//     onDrag={some method} 
//     onDragEnd={some method} 
// >
//     <div>Drag Me!</div>
// </DragDropContainer>

  );
};

export default GameScreen;
