import Navigation from "../Navigation";
import React from "react";
import { screen, render as customRender } from "test-utils";
import userEvent from "@testing-library/user-event";

const render = () => customRender(<Navigation />);

test("renders navbar with links, dropdowns and a search bar", () => {
  render();
  screen.getByTestId("brand-link");
  screen.getByTestId("dropdowns");
  screen.getByTestId("links");
  screen.getByTestId("search-bar");
});
