import userEvent from "@testing-library/user-event";
import React from "react";
import { screen, render as customRender } from "test-utils";
import NavLink from "../NavLink";
import { linksEnum } from "../NavLink";

const linkNames = [
  { link: "historical", name: linksEnum.HISTORY },
  { link: "movement", name: linksEnum.MOVEMENT },
  { link: "philosophers", name: linksEnum.PHILOSOPHER },
];

linkNames.map((linkName) => {
  const render = () => customRender(<NavLink page={linkName.link} />);

  test("links are rendered with correct names", () => {
    render();
    const link = screen.queryByText(linkName.name);
    expect(link).toBeInTheDocument();
  });

  test("links lead to correct pages", () => {
    render();
    const link = screen.queryByText(linkName.name);
    userEvent.click(link!);
    expect(location.pathname).toBe(`/${linkName.link}`);
  });
});
