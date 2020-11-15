import React from "react";
import PhilosophersList from "../PhilosophersList";
import { screen, render as customRender } from "test-utils";
import { PhilType } from "types/types";
import userEvent from "@testing-library/user-event";

const testPhilList: Partial<PhilType>[] = [
  {
    fname: "fname1",
    lname: "lname1",
    topname: "topname1",
    dates: "dates1",
  },
  {
    fname: "fname2",
    lname: "lname2",
    dates: "dates2",
  },
  {
    fname: "fname3",
    dates: "dates3",
  },
];

const testFraction = 3;

const render = () =>
  customRender(
    //@ts-ignore
    <PhilosophersList philosophers={testPhilList} fraction={testFraction} />
  );

test("renders button according to db data", () => {
  render();
  screen.getByText("fname1 topname1 (dates1)");
  screen.getByText("lname2, fname2 (dates2)");
  screen.getByText("fname3 (dates3)");
});

test("links send to correct pages", () => {
  render();

  const button1 = screen.getByText("fname1 topname1 (dates1)");
  userEvent.click(button1);
  expect(location.pathname).toBe("/philosophers/fname1_topname1");

  const button2 = screen.getByText("lname2, fname2 (dates2)");
  userEvent.click(button2);
  expect(location.pathname).toBe("/philosophers/lname2_fname2");

  const button3 = screen.getByText("fname3 (dates3)");
  userEvent.click(button3);
  expect(location.pathname).toBe("/philosophers/fname3");
});
