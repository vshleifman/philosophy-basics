import React from "react";
import { render } from "@testing-library/react";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import mockPhilosophers from "test/mocks/mockPhilosophers";

it("renders phils with links", () => {
  const {} = render(
    <PhilosophersList philosophers={mockPhilosophers} fraction={1} />
  );
});
