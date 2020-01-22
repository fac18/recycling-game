import React from "react";

import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";

const ProgressScore = props => {
  return (
    <div>
      <span>Count is {props.count}</span>
      <StarFish />
    </div>
  );
};

export default ProgressScore;
