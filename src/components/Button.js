import React from "react";
import UIfx from "uifx";
import clickMp3 from "../assets/sounds/finger-snap.mp3";
import styled, { css } from "styled-components";

const click = new UIfx(clickMp3);

const GenericButton = styled.button`
  background: #ff8a00;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #ffad4c,
    inset 10px 10px 4px #cc6e00;
  border-radius: 25px;
  width: 375px;
  min-height: 100px;
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
  border-style: none;
  z-index: 5;
  margin-bottom: 25px;

  ${props =>
    props.primary &&
    css`
      background: #a10094;
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #c202b2,
        inset 10px 10px 4px #8a0072;
    `}
`;

const Button = props => {
  return (
    <GenericButton
      primary={props.primary}
      className="btn"
      onClick={() => {
        props.handleClick();
        click.play();
      }}
    >
      {props.label}
    </GenericButton>
  );
};

export default Button;
