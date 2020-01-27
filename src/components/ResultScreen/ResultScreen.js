import React from "react";
import styled from "styled-components";
import badges from "../../utils/badgeData";
import ProgressScore from "../GameScreen/ProgressScore";
import Button from "../Button";

//import { ReactComponent as StarFish } from "../../assets/starfish-smile.svg";

const Container = styled.div`
background-image: linear-gradient(#21B2D3, #7ABEFD);
display: flex;
flex-direction: column;
align-items: center;
justify-items: space-around;
height: 100vh;
width: 100vw;
`;

const PageHeader = styled.h1`
color:orange;
`;

const MessageBox = styled.div`
  width: 50vw;
  height: 20vh;
  border-radius: 10px;
  background-color: #08345C;
  color: white;
  padding: 20px;
`;

const BadgeBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const ResultScreen = (props) => {
 const [badgeGiven, setBadgeGiven] = React.useState(0);

 React.useEffect (() => {
  if (props.count >= 5 && props.count < 11) {setBadgeGiven(1)}
  else if (props.count >= 10 && props.count < 16) {setBadgeGiven(2)}
  else if (props.count >= 15) {setBadgeGiven(3)}
 }, [props.count, badgeGiven])

  return (
    <Container>
      <PageHeader>NICE ONE!</PageHeader>
      <ProgressScore count={props.count} />
      <BadgeBox> <img src={badges[badgeGiven].src} alt="An animal badge to say well done!" /><MessageBox><p>{badges[badgeGiven].message}</p></MessageBox></BadgeBox>
      <div>
        <Button label="Play again">{props.label}</Button>
        <Button label="learn more">{props.label}</Button>
      </div>
    </Container>
  );
};

export default ResultScreen;
