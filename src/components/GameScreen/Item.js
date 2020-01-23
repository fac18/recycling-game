import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100px;
  height: 100px;
  `;

//   ${props => {
//     if (props.itemVisibility) {
//       return `
//         display: none;
//       `;
//     } else {
//       return `
//         display: block;
//       `;
//     }
//   }}
// `;



const Item = props => {
  return <Image src={props.item.src} alt="Drag me to the right bin!" />;
};

export default Item;
