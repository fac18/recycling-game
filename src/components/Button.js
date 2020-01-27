import React from "react";
import UIfx from "uifx";
import clickMp3 from "../assets/sounds/finger-snap.mp3";

const click = new UIfx(clickMp3);

const Button = props => {
  return (
    <button
      className="btn"
      onClick={() => {
        props.handleClick();
        click.play();
      }}
    >
      Okay
    </button>
  );
};

export default Button;
