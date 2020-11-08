import React from "react";
import { render, screen } from "test-utils";
import DropDown from "../DropDown";
import userEvent from "@testing-library/user-event";

const title = "title";
const category = "category";

const getCategory = () => screen.queryByText(category);

test("dropdown renders with random props", () => {
  render(
    <DropDown
      drop={{
        [title]: [category],
      }}
    />
  );

  expect(getCategory()).not.toBeInTheDocument();

  userEvent.click(screen.getByText(title));

  expect(getCategory()).toBeInTheDocument();
});
