import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import badges from "../../utils/badgeData";
import ProgressScore from "../GameScreen/ProgressScore";
import Button from "../Button";

import FunFactsModal from "../LandingScreen/FunFacts";

import {
  Container,
  MessageBox,
  BadgeBox,
  BoxMessage,
  MessageImage,
  PageHeader
} from "../MasterCss";

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
    if (props.count === 1) {
      setBadgeGiven(4)
    } else if (props.count >= 5 && props.count < 11) {
      setBadgeGiven(1);
    } else if (props.count >= 10 && props.count < 16) {
      setBadgeGiven(2);
    } else if (props.count >= 15) {
      setBadgeGiven(3);
    }
  }, [props.count, badgeGiven]);

  const history = useHistory();

  const restartGame = () => {
    props.setCount(0);
    props.setBadCount(0);
    history.push("/game");
  };

  return (
    <Container>
      <PageHeader>nice one!</PageHeader>
      <ProgressScore results count={props.count} />
      <BadgeBox>
        {" "}
        <MessageImage
          src={badges[badgeGiven].src}
          alt="An animal badge to say well done!"
        />
        <MessageBox results>
          <BoxMessage>{props.count}{badges[badgeGiven].message}</BoxMessage>
        </MessageBox>
      </BadgeBox>
      <ButtonContainer>
        {props.funFactsModal && (
          <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
        )}
        <Button label="learn more" handleClick={props.showFunFactsModal}>
          {props.label}
        </Button>

        <Button primary label="Play again" handleClick={restartGame}>
          {props.label}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ResultScreen;
