import React from "react";
import { render, getByText } from '@testing-library/react';
import LandingScreen from './LandingScreen';


test("play again button is on the page", ()=>{
  const {getByText,debug} = render(<LandingScreen/>)
  const button = getByText("Lets Play Again!")
  expect(button).toBeInDocument();
})
  