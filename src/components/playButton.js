import React from "react";
import UIfx from "uifx";
// import clickMp3 from "../../assets/sounds/finger-snap.mp3 "
import styled from "styled-components";

// const click = new UIfx(clickMp3);


const Play = styled.button`
  background: #A10094;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #8f0183,
  inset 10px 10px 4px #78006e;
  border-radius: 25px;
  width: 375px;
  height: 100px;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const PlayButton = props => {
    return (
      <Play
        className="btn"
        onClick={() => {
          props.handleClick();
        //   click.play();
        }}
      >
        {props.label}
      </Play>
    );
  };
  
  export default PlayButton;