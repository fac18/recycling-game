import React from "react";
import Item from "./Item";
import { render } from "@testing-library/react";
import items from "../../../src/utils/itemData";

test("Test Item renders", () => {
    
    const { getByAltText, debug } = render(<Item item={items[2]}/>);
    const item = getByAltText("Drag me to the right bin!");
    debug(item);
    expect(item).toBeInTheDocument();
});
