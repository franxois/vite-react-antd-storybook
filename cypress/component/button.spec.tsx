import * as React from "react";
import { mount } from "@cypress/react";
import { Button } from "antd";

it("Button", () => {
  mount(<Button>Test button</Button>);
  cy.get("button").contains("Test button").click();
});
