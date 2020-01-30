import React from "react";
import Fail from "./FailModal";
import { createMemoryHistory } from 'history'
import{Router} from "react-router-dom"
import { render, fireEvent } from "@testing-library/react";

test("Testing FailModal renders", () => {
  const history = createMemoryHistory()
  const { getByText,debug } = render(
    <Router history={history}>
  <Fail item={{
    name: "Glass Bottles",
    src: "images/glass-bottle.svg",
    bin: "recycling"
}}/>
</Router>
);
  const button = getByText("OK");
  debug(button)
  expect(button).toBeInTheDocument()
});
