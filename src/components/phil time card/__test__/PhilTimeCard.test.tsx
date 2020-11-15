import React from "react";
import PhilTimeCard from "../PhilTimeCard";
import { screen, render as customRender } from "test-utils";
import { Era } from "types/types";

const testEra = Era.ANCIENT;

const render = customRender(<PhilTimeCard currentEra={testEra} />);

test("hi", () => {});
