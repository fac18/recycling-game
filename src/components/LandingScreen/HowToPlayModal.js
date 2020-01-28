import React from "react";
import styled from "styled-components";

const HowToPlayBox = styled.div`
  background-color: rgba(23, 235, 16, 0.479);
  padding: 3em;
  position: fixed;
  width: 80%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
`;

const Box = styled.div`
  width: 50vw;
  height: 20vh;
  border-radius: 10px;
  background-color: #08345c;
  color: white;
  padding: 20px;
`;

const HowToPlayModal = ({ handleClose }) => {
  return (
    <HowToPlayBox>
      <section className="modal-main">
        <h2>How to play?</h2>
        <h2>This is how to play the game</h2>
        <Box>Drag and drop all items that CAN BE RECYCLED into this bin.</Box>
        <Box>Drag and drop all the items that CANNOT BE RECYCLED into this bin</Box>
        <Box>Drag and drop all items that are FOOD WASTE into this bin</Box>
        <Box>This is your LIFE. If you put the item in the worng bin you lose a life</Box>
        <Box>If you put the item in the right bin you get POINTS</Box>
        {/* {children} */}
        <button onClick={handleClose}>close</button>
      </section>
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
