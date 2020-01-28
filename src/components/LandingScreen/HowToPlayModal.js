import React from "react";
import styled from "styled-components";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";


import { ReactComponent as Cross } from "../../assets/x-button.svg";

const HowToPlayBox = styled.div`
<<<<<<< HEAD
background: linear-gradient(180deg, #21B2D3 0%, #7ABEFD 100%), linear-gradient(180deg, #68C2CD 0%, #7ABEFD 100%);  padding: 3em;
=======
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 3em;
>>>>>>> master
  position: fixed;
  width: 80%;
  height: 80%;
  opacity: 0.9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
`;


const Box = styled.div`
  margin: 50px;
  display: flex;
  felx-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 20vh;
  border-radius: 10px;
  background-color: #08345c;
  color: white;
  padding: 20px;
`;

const howToBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


const HowToPlayModal = ({ handleClose }) => {
  return (
    <HowToPlayBox>
      <section className="modal-main">
        <Cross onClick={handleClose} />
        <h2>How to play?</h2>
        <h2>This is how to play the game</h2>
        <div className="howToBox"><RecycleBin width="30%"/><Box> Drag and drop all items that CAN BE RECYCLED into this bin.</Box></div>
        <div className="howToBox"><BlackBin width="30%"/><Box>Drag and drop all the items that CANNOT BE RECYCLED into this bin</Box></div>
        <div className="howToBox"><CompostBin width="30%"/><Box>Drag and drop all items that are FOOD WASTE into this bin</Box></div>
        <div className="howToBox"><Box>This is your LIFE. If you put the item in the worng bin you lose a life</Box></div>
        <div className="howToBox"><Box>If you put the item in the right bin you get POINTS</Box></div>
        {/* {children} */}
      </section>
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
