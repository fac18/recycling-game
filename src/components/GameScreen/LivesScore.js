import React from "react";

import { ReactComponent as Heart1 } from "../../assets/heart-lives.svg";
import { ReactComponent as Heart2 } from "../../assets/heart-lives.svg";
import { ReactComponent as Heart3 } from "../../assets/heart-lives.svg";

const LivesScore = () => {
  return (
    <div style={{ marginLeft: 900 }}>
      {/* <button onClick={removeHeart}>Click</button> */}
      <Heart1 id="heart1" className="heart" />
      <Heart2 id="heart2" className="heart" />
      <Heart3 id="heart3" className="heart" />
    </div>
  );
};

export default LivesScore;
