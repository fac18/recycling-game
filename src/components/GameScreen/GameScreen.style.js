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
  padding-top: 20px;
  padding-left: 20px;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20vw;
`;

const Wave5 = styled(Wave5Svg)`
  width: 100vw;
  position: fixed;
  bottom: 0px;
  left: 0;
  height: 20vh;
`;

const Wave4 = styled(Wave4Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 20px;
  left: 0;
`;

const Wave3 = styled(Wave3Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 40px;
  left: 0;
`;

const Wave2 = styled(Wave2Svg)`
  width: 100vw;
  height: 20vh;
  position: fixed;
  bottom: 60px;
  left: 0;
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 8%;
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  margin-left: -107px;
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  right: 8%;
`;

const GameItem = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  margin-left: -50px;
`;

const Algae1 = styled(Algae1Svg)`
  position: fixed;
  left: 81.66%;
  right: 15.33%;
  bottom: -1%;
  z-index: 900;
`;

const Algae2 = styled(Algae2Svg)`
  position: fixed;
  left: 8.79%;
  right: 83.42%;
  bottom: -1%;
  z-index: 900;
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
  width: 83.6px;
  height: 70.56px;
  right: 20px;
  bottom: 40px;
  z-index: 900;
`;

const Crab = styled(CrabSvg)`
  position: fixed;
  width: 98.54px;
  height: 87.07px;
  left: 22px;
  bottom: 30px;
  z-index: 900;
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
  width: 51.27px;
  height: 75.69px;
  right: 15%;
  bottom: 40px;
  z-index: 901;
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
  width: 75.03px;
  height: 95.34px;
  left: 25%;
  bottom: 12%;
  transform: rotate(-10deg);
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  position: fixed;
  bottom: 2%;
  margin: 0;
  width: 100vw;
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
