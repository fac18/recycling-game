import React from "react";
import Item from "./Item";
import { render } from "@testing-library/react";
import items from "../../../src/utils/itemData";

test("Test Item renders", () => {
    
    const { getByTitle, debug } = render(<Item item={items[0]}/>);
    const item = getByTitle("item");
    debug(item);
    expect(item).toBeInTheDocument();
});