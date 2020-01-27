import React from "react";
import Success from "./SuccessModal";
import { render, fireEvent, GetByText, findByText } from "@testing-library/react";


test("Testing SuccessModal renders", async () => {
    const { getByText, findByText } = render(<Success item={{
        name: "Glass Bottles",
        src: "images/glass-bottle.svg",
        bin: "recycling"
    }}/>);
    const buttonNode = getByText("OK");
    fireEvent.click(buttonNode);

    const wellDone = await findByText("Well Done!");
    expect(wellDone).toBeInTheDocument();
});