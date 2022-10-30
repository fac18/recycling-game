import styled from "styled-components";

import { ReactComponent as Wave2Svg } from "../../assets/sea-wave-2.svg";
import { ReactComponent as Wave3Svg } from "../../assets/sea-wave-3.svg";
import { ReactComponent as Wave4Svg } from "../../assets/sea-wave-4.svg";
import { ReactComponent as Wave5Svg } from "../../assets/sea-wave-5.svg";
import { ReactComponent as ScallopSvg } from "../../assets/scallop.svg";
import { ReactComponent as Algae1Svg } from "../../assets/algae-1.svg";
import { ReactComponent as Algae2Svg } from "../../assets/algae-2.svg";
import { ReactComponent as Algae3Svg } from "../../assets/algae-3.svg";
import { ReactComponent as CrabSvg } from "../../assets/crab.svg";
import { ReactComponent as SeahorseSvg } from "../../assets/seahorse.svg";
import { ReactComponent as RedFishSvg } from "../../assets/red-fish.svg";
import { ReactComponent as BubblesSvg } from "../../assets/bubbles.svg";
import { ReactComponent as JellyfishSvg } from "../../assets/jellyfish-smile.svg";
import { ReactComponent as OctopusSvg } from "../../assets/octopus-smile.svg";

const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1.5vh;
  padding-left: 1.5vh;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1.6%;
`;

const Wave5 = styled(Wave5Svg)`
  width: 100vw;
  position: fixed;
  bottom: 0px;
  left: 0;
  height: 20vh;
  @media (max-width: 480px) {
    height: 12.3vh;
    bottom: 16vh;
  }
`;

const Wave4 = styled(Wave4Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 8vh;
  left: 0;
  @media (max-width: 480px) {
    height: 12.3vh;
    bottom: 16vh;
  }
`;

const Wave3 = styled(Wave3Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 8vh;
  left: 0;
  @media (max-width: 480px) {
    height: 25vh;
    bottom: 0vh;
  }
`;

const Wave2 = styled(Wave2Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 7.6vh;
  left: 0;
  @media (max-width: 480px) {
    height: 1vh;
    bottom: 16vh;
  }
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 7.5vh;
  left: 8%;
  @media (max-width: 480px) {
    bottom: 27vh;
  }
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 7.5vh;
  left: 50%;
  margin-left: -14vw;
  @media (max-width: 480px) {
    bottom: 27vh;
  }
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 7.5vh;
  right: 8%;
  @media (max-width: 480px) {
    bottom: 27vh;
  }
  
`;

const GameItem = styled.div`
  position: fixed;
  top: 10%;
  left: 0%;
`;

const Algae1 = styled(Algae1Svg)`
  position: fixed;
  left: 81.66%;
  right: 15.33%;
  bottom: -1%;
  z-index: 900;
  @media (max-width: 480px) {
    bottom: 8vh;
  }
`;

const Algae2 = styled(Algae2Svg)`
  position: fixed;
  left: 8.79%;
  right: 83.42%;
  bottom: -1%;
  z-index: 900;
  @media (max-width: 480px) {
  }
`;

const Algae3 = styled(Algae3Svg)`
  position: fixed;
  left: 43.3%;
  right: 40.37%;
  bottom: -1%;
  z-index: 900;
`;

const Scallop = styled(ScallopSvg)`
  position: fixed;
  width: 8.1vw;
  height: 10.9vh;
  right: 1.3vw;
  bottom: 1.4vw;
  z-index: 900;
  @media (max-width: 480px) {
    height: 8.3vh;
    right: 2.3vw;
    width: 10.1vw;
  }
`;

const Crab = styled(CrabSvg)`
  position: fixed;
  width: 9.4vw;
  height: 12.3vh;
  left: 1.3vw;
  bottom: 1.8vw;
  z-index: 900;
  @media (max-width: 480px) {
    height: 6.3vh;
  }
`;

const Seahorse = styled(SeahorseSvg)`
  position: fixed;
  left: 16.86%;
  right: 76.57%;
  bottom: -3%;
  z-index: 900;
`;

const Bubbles = styled(BubblesSvg)`
  position: fixed;
  width: 5.2vw;
  height: 12.1vh;
  right: 15%;
  bottom: 6.5vw;
  z-index: 901;
  @media (max-width: 480px) {
    height: 6.3vh;
  }
`;

const RedFish = styled(RedFishSvg)`
  position: fixed;
  left: 72.53%;
  right: 21.87%;
  bottom: 0.79%;
  z-index: 900;
`;

const Octopus = styled(OctopusSvg)`
  position: fixed;
  right: 22.67%;
  bottom: 10%;
`;

const Jellyfish = styled(JellyfishSvg)`
  position: fixed;
  width: 6.8vw;
  height: 8.3vh;
  left: 25%;
  bottom: 12%;
  transform: rotate(-10deg);
  @media (max-width: 480px) {
    height: 6.3vh;
  }
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 6vh;
  line-height: 8vh;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  position: fixed;
  bottom: 2%;
  margin: 0;
  width: 100vw;
  @media (max-width: 480px) {
    font-size: 4vh;
    line-height: 10vh;
    bottom: 20vh;
  }
`;

export {
  Header,
  LivesContainer,
  Wave5,
  Wave4,
  Wave3,
  Wave2,
  BlackBinBox,
  RecycleBinBox,
  CompostBinBox,
  GameItem,
  Algae1,
  Algae2,
  Algae3,
  Scallop,
  Crab,
  Seahorse,
  Bubbles,
  RedFish,
  Octopus,
  Jellyfish,
  ItemText
};
