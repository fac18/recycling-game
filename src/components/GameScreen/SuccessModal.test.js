import React from "react";
import Success from "./SuccessModal";
import { render, fireEvent } from "@testing-library/react";


test("Testing SuccessModal renders", () => {
    const { getByText } = render(<Success item={{
        name: "Glass Bottles",
        src: "images/glass-bottle.svg",
        bin: "recycling"
    }}/>);
    const buttonNode = getByText("OK");
    fireEvent.click(buttonNode);
});