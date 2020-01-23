import React from 'react';
import { render, getByTitle } from '@testing-library/react';
import GameScreen from './GameScreen';
// import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";

test('recycle bin shows on page', () => {
  const { getByTitle, debug } = render(< GameScreen />);
  const recycleBin = getByTitle('recyclebin');
  debug(recycleBin);
  expect(recycleBin).toBeInTheDocument();
});
