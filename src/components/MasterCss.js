import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

const MessageBox = styled.div`
  width: 50vw;
  height: 20vh;
  border-radius: 25px;
  background-color: #08345c;
  color: white;
  padding: 20px;
  margin: 1em;
  display:flex;
  flex-direction: row;
  align-items: center;
`;

const BadgeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BoxMessage = styled.p`
  font-family: Signika;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  align-items: center;
  color: #ffffff;
  padding-left: 0.5em;
`;

const ResponseModalHeader = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  width: 60vw;
  padding-top: 0.5em;
`;

const MessageImage = styled.img`
  width: 100px;
  height: 100px;
`;

export {
  Container,
  MessageBox,
  BadgeBox,
  BoxMessage,
  ResponseModalHeader,
  MessageImage
};
