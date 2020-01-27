import React from "react";
import styled from "styled-components";
import badges from "../../utils/badgeData";
import ProgressScore from "../GameScreen/ProgressScore";
import Button from "../Button";

const Container = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const PageHeader = styled.h1`
  font-family: Freckle Face;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  color: #ff8a00;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
`;

const MessageBox = styled.div`
  width: 50vw;
  height: 20vh;
  border-radius: 10px;
  background-color: #08345c;
  color: white;
  padding: 20px;
`;

const BadgeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BadgeMessage = styled.p`
  font-family: Signika;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  align-items: center;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
`;

const ResultScreen = props => {
  const [badgeGiven, setBadgeGiven] = React.useState(0);

  React.useEffect(() => {
    if (props.count >= 5 && props.count < 11) {
      setBadgeGiven(1);
    } else if (props.count >= 10 && props.count < 16) {
      setBadgeGiven(2);
    } else if (props.count >= 15) {
      setBadgeGiven(3);
    }
  }, [props.count, badgeGiven]);

  return (
    <Container>
      <PageHeader>nice one!</PageHeader>
      <ProgressScore count={props.count} />
      <BadgeBox>
        {" "}
        <img
          src={badges[badgeGiven].src}
          alt="An animal badge to say well done!"
        />
        <MessageBox>
          <BadgeMessage>{badges[badgeGiven].message}</BadgeMessage>
        </MessageBox>
      </BadgeBox>
      <ButtonContainer>
        <Button label="Play again">{props.label}</Button>
        <Button label="learn more">{props.label}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ResultScreen;
