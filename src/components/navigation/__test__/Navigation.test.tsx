import React from "react";
import Navigation from "components/navigation/Navigation";
import { shallow } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

// test("renders navigation", () => {
//   const { container } = render(<Navigation />);
//   const navElement = container.querySelector(".navbar");
//   expect(navElement).toBeInTheDocument();
// });

// test("renders navigation elements", () => {
//   const { container } = render(<Navigation />);
//   const elements = [
//     ".navbar-brand",
//     ".nav-link",
//     ".rounded-circle",
//     ".navbar-toggler.collapsed",
//     ".navbar-collapse.collapse",
//     ".dropdown-toggle",
//   ];
//   elements.map((el) => expect(container.querySelector(el)).toBeVisible());
// });

// test("dropdowns open", () => {
//   const { container, getByText, getAllByRole } = render(<Navigation />);
//   const dropdownElements = container.querySelectorAll(
//     ".dropdown-toggle.nav-link"
//   );
//   console.log(Array.from(dropdownElements));

//   Array.from(dropdownElements).map((el) => {
//     const element = getByText(el);
//     fireEvent.click(element);
//     const subCategory = getByText("Metaphysics");
//     expect(subCategory).toBeVisible();
//   });
// });

// describe("<Navigation />", () => {
//   it("does smth", () => {
//     const wrapper = shallow(<Navigation />);
//   });
// });
