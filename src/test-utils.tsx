import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const render = (
  ui: JSX.Element,
  options?: Omit<RenderOptions, "queries" | "wrapper">
) => rtlRender(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { render };
