import React from "react";
import Success from "./SuccessModal";
import { createMemoryHistory } from 'history'
import{Router} from "react-router-dom"
import { render, fireEvent, GetByText, findByText } from "@testing-library/react";


test("Testing SuccessModal renders", () => {
    const history = createMemoryHistory()
    const { getByText,debug } = render(
        <Router history={history}>
    <Success item={{

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

// test('1 + 1 is 2', () => {
//     const actual = 1 + 1;
//     const expected = 2;
//     expect(actual).toBe(expected);
//   });

