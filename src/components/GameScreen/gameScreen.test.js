import React from 'react';
import { render, getByTitle, getByAltText, act } from '@testing-library/react';
import GameScreen from './GameScreen';
// import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";

describe("The Game Screen", () => {
  it("should have a recycle bin on the page", () => {
    const { getByTitle, debug } = render(< GameScreen />);
    const recycleBin = getByTitle("recyclebin");
    expect(recycleBin).toBeInTheDocument();
  });

  it("should have a black bin on the page", () => {
    const { getByTitle, debug } = render(< GameScreen />);
    const starFish = getByTitle('blackbin');
    expect(starFish).toBeInTheDocument();
  });

  it("should allow you to drag a bottle into the correct bin", async () => {
    const { getByTitle, container } = render(< GameScreen />);
    const bottle = container.getElementsByTagName('img');
    const blackbin = container.getByTitle('blackbin');
    console.log(blackbin);
    await act(
      // () => bottle.trigger(new MouseEvent('click', {bubbles: true}))
      () => blackbin.fireEvent(new DragEvent('ondragend', {bubbles: true}))

    );
    expect(bottle).toExist();
  });
});


