import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Error from "./Error";
import { BrowserRouter as Router } from "react-router-dom";

test("The 404 Page renders", () => {
    render(
      <Router>
        <Error />
      </Router>
    );
  });

