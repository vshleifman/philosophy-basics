import React from "react";
import { render } from "@testing-library/react";
import Footer from "components/footer/Footer";
import Container from "react-bootstrap/Container";

test("footer renders", () => {
  const { container } = render(<Footer />);
  const footerElement = container.querySelector("footer");
  expect(footerElement).toBeInTheDocument();
});
