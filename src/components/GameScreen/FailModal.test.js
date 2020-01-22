import React from "react";
import Fail from "./FailModal";
import { render, fireEvent } from "@testing-library/react";

test("Testing FailModal renders", () => {
    const { getByText } = render(<Fail />);
    const buttonNode = getByText("OK");
    fireEvent.click(buttonNode);
});