import React from "react";

import { ReactComponent as Heart } from "../../assets/heart-lives.svg";

// import styled from "styled-components";
// const Life = styled.div`
//   width: 50px;
//   height: 50px;
//   background-size: cover;
// `;

const LivesScore = props => {
  const [livesArr, setLivesArr] = React.useState([1, 2, 3, 4]);
  console.log("before", livesArr);
  React.useEffect(() => {
    const newLivesArr = livesArr.slice(0, -1); // pop mutates original array, slice returns a new one
    setLivesArr(newLivesArr);
  }, [props.badCount]);
  console.log("after", livesArr);
  return Array.from(livesArr, (x, i) => {
    return <div>{i + 1 ? <Heart /> : null}</div>;
  });
};
export default LivesScore;
