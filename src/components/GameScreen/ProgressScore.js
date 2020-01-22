import React from "react";

import { DragDropContainer } from "react-drag-drop-container";
import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";

const ProgressScore = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span>Count is {count}</span>
      {/* <button onClick={increment}>Increment</button> */}
      <DragDropContainer targetKey="middle">
        <div>
          <StarFish onHit={increment} />{" "}
        </div>
      </DragDropContainer>
    </div>
  );
};

export default ProgressScore;
