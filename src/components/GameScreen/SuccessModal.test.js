import React from "react";
import Success from "./SucessModal";
import { render, fireEvent } from "@testing-library/react";

test("Testing SuccessModal renders", () => {
    const { getByText } = render(<Success />);
    const buttonNode = getByText("OK");
    fireEvent.click(buttonNode);
});