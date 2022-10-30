import styled, { css } from "styled-components";
// import { ReactComponent as Cross } from "../assets/x-button.svg";

const Paragraph = styled.p`
  font-size: 0.95em;
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;
const Container = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled(Container)`
  justify-content: start;
`;

const PageHeader = styled.h1`
  font-family: Freckle Face;
  font-style: normal;
  font-weight: normal;
  font-size: 5vh;
  line-height: 4vh;
  text-align: center;
  color: #ff8a00;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-block-end: 0px;
  display: inline;
  @media (max-width: 480px) {
    font-size: 4vh;
    line-height: 4vh;;
    margin-left: 2rem;
    ${props =>

    props.nomargin &&
    css`
      margin: 0;
    `}
  }

`;

const MessageBox = styled.div`
  width: 80vw;
  min-height: 20vh;
  border-radius: 1.5vh;
  background-color: #08345c;
  color: white;
  padding: 1.5vw;
  margin: 1em;
  display:flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  @media (max-width: 480px) {
    min-height: 12vh;
    ${props =>

    props.expand &&
    css`
      min-height: 17vh;
    `}
  }
  ${props =>

    props.primary &&
    css`
      width: auto;
    `}

  ${props =>

    props.results &&
    css`
    justify-content: center;
    `}
`;

const BadgeBox = styled.div`
  width: 94vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

`;

const BoxMessage = styled.div`
  font-family: Signika;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  width: 100%;
  // line-height: 4vh;
  align-items: center;
  color: #ffffff;
  // padding-left: 0.5em;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 0.96em;
    line-height: 1.5em;
  }
`;

const ModalHeader = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 2.3em;
  // line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  width: 80vw;
  padding-top: 0.5em;
  z-index: 5;
  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

const MessageImage = styled.img`
  width: 8.2em;
  height: 7.3em;

  ${props =>
    props.bin &&
    css`
      // width: 100px;
      // height: 100px;
      width: 5.2em;
      height: 4.3em;
    `}

  @media (max-width: 480px) {
    width: 5.2em;
    height: 4.3em;
  }
`;

const OrangeText = styled.span`
  color: #FF8A00;
  font-family: Freckle Face;
  display: inline;
`;

// const CloseCross = styled(Cross)`
//   left: 1%;
//   top: 2.04%;
//   position: fixed;
//   cursor: pointer;
// `;

const IconBin = styled.img`
  @media (max-width: 480px) {
    height: 22vh;
  }
`;
const IconImage = styled.img`
  margin-left: 4.1rem;
  height: 3.3em;
  margin-top: 0.6rem;
  cursor: pointer;
  top: 3.8%;
  
  @media (max-width: 768px) {
    // flex-direction: column;
    // height: 2.3em;
    // top: 3.2%;
    margin-top: 0;
    margin-left: 0.1rem;
    ${props =>
    props.game &&
    css`
      height: 2.3em;
    `}

  }
  @media (max-width: 480px) {
    left: 3%;
    margin-left: 0.1rem;
    ${props =>
    props.game &&
    css`
      height: 3.3em;
    `}
  }
`;

const CloseCross = styled.img`
  left: 3%;
  height: 3.3em;
  margin-bottom: 18px;
  position: fixed;
  cursor: pointer;
  padding-bottom: -11px;
  top: 3.2%;
  @media (max-width: 768px) {
    // flex-direction: column;
    height: 2.3em;
    top: 3.2%;

  }
  @media (max-width: 480px) {
    left: 3%;
  }
`;
const PlayIcon = styled.img`
  left: 1%;
  height: 3.3em;

  position: fixed;
  cursor: pointer;
  top: 4.2%;
  @media (max-width: 768px) {
    // flex-direction: column;
    height: 2.3em;
    left: 1%;

  }
  @media (max-width: 480px) {
    left: 1%;
    top: 2.5%;
  }
`;
const Spacer = styled.div`
width: 2.5vw;
padding-bottom:4.5vh;
`
export {
  Container,
  PageHeader,
  MessageBox,
  BadgeBox,
  BoxMessage,
  ModalHeader,
  MessageImage,
  OrangeText,
  CloseCross,
  Paragraph,
  IconImage,
  IconBin,
  Spacer,
  PlayIcon,
  Wrapper
};
