import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import Philosophers from "pages/philosophers/Philosophers";

test("renders learn react link", () => {
  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <Philosophers />
    </MemoryRouter>
  );
  // const linkElement = getByText("Major philosophers in alphabetical order");
  const textElement = getByTestId("text");
  expect(textElement).toHaveTextContent(
    "Major philosophers in alphabetical order"
  );
});
