import React from "react";
import heart from "../../assets/heart-lives.svg";
import { IconImage } from "../MasterCss";
const LivesScore = props => {
  const [livesArr, setLivesArr] = React.useState([1, 2, 3, 4]);

  React.useEffect(() => {
    const newLivesArr = livesArr.slice(0, -1);
    // pop mutates original array, slice returns a new one
    setLivesArr(newLivesArr);
    // eslint-disable-next-line
  }, [props.badCount]);

  return livesArr.map((item) => {
    return <IconImage game src={heart} key={item}/>;
  });
};

export default LivesScore;
