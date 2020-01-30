import React from "react";
import { render, fireEvent, GetByText, findByText } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ResultScreen from "../ResultScreen/ResultScreen"

test("The HomePage renders", () => {
    render(
      <Router>
        <ResultScreen completed={[]} />
      </Router>
    );
  });