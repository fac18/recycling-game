import React from "react";
import styled from "styled-components";

const GameItem = styled.img`
  width: 100px;
  height: 100px;
`;

const Item = props => {
  return <GameItem src={props.item.src} alt="Drag me to the right bin!" />;
};

export default Item;
