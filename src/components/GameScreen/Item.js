import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Item = currentItem => {
  return <Image src={currentItem.item.src} alt="Drag me to the right bin!" />;
};

export default Item;
