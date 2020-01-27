import React from "react";
import { ReactComponent as Heart } from "../../assets/heart-lives.svg";

const LivesScore = props => {
  const [livesArr, setLivesArr] = React.useState([1, 2, 3, 4]);

  React.useEffect(() => {
    const newLivesArr = livesArr.slice(0, -1);
    setLivesArr(newLivesArr);
    console.log("This is livesArr", livesArr);
  }, [props.badCount]);

  return livesArr.map(() => {
    return [
      <div>
        <Heart />
      </div>
    ];
  });
};
export default LivesScore;
