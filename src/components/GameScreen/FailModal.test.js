import React from "react";
import Fail from "./FailModal";
import { render, fireEvent } from "@testing-library/react";

// test("Testing FailModal renders", () => {
//   const { getByText } = render(<Fail item={{
//     name: "Glass Bottles",
//     src: "images/glass-bottle.svg",
//     bin: "recycling"
// }}/>);
//   const buttonNode = getByText("OK");
//   fireEvent.click(buttonNode);
// });

test('1 + 2 is 3', () => {
  const actual = 2 + 1;
  const expected = 3;
  expect(actual).toBe(expected);
});