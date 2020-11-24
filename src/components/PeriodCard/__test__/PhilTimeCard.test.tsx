import React from "react";
import PeriodCard from "../PeriodCard";
import { screen, render as customRender } from "test-utils";
import { Era } from "types/types";

const testEra = Era.ANCIENT;

const render = customRender(<PeriodCard currentEra={testEra} />);

test("hi", () => {});
