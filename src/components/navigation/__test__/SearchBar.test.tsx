import React from "react";
import SearchBar from "../SearchBar";
import { render as customRender } from "test-utils";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";

const render = () => customRender(<SearchBar />);

test("entering search displays an alert", () => {
  render();
  const searchTerm = "test";

  const searchBox = screen.getByPlaceholderText("Search");
  userEvent.click(searchBox);
  // userEvent.type(searchBox, `${searchTerm}`);
  fireEvent.keyDown(searchBox, { key: "Enter", code: "Enter" });
  // console.log(screen.getByRole("alert"));

  screen.debug(document);
  // expect(
  //   screen.getByText(`Congrats! You've sarched for ${searchTerm}`)
  // ).toBeInTheDocument();
});
