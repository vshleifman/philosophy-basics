import React from "react";
import { screen, render as customRender } from "test-utils";
import Quoter from "../Quoter";

const render = () => customRender(<Quoter />);

test("it renders", () => {
  render();

  screen.getByTestId("main-img");
});
