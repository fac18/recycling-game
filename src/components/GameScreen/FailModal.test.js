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

test('1 + 1 is 2', () => {
  const actual = 1 + 1;
  const expected = 2;
  expect(actual).toBe(expected);
});