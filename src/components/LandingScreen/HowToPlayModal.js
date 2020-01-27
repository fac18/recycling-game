import React from "react";
import styled from "styled-components";

const HowToPlayBox = styled.div`
  background-color: rgba(23, 235, 16, 0.479);
  padding: 3em;
`;

const HowToPlayModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <HowToPlayBox className={showHideClassName}>
      <section className="modal-main">
        <h2>How to play?</h2>
        <h2>This is how to play the game</h2>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
