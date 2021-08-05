import * as React from "react";
import { mount } from "@cypress/react";
import App from "../../src/App";

it("App", () => {
  mount(<App />);
  cy.contains("Hello Vite + React!").should("be.visible");
  cy.contains(/count is: 0/).click();
  cy.contains(/count is: 1/).should("exist");
});
