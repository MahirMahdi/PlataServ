// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { customTheme } from "../../src/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "../../src/contexts/AuthContext";
import POSProvider from "../../src/contexts/POSContext";

Cypress.Commands.add("mount", (component, options = {}) => {
  const { routerProps = { initialEntries: ["/"] }, ...mountOptions } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>
      <ChakraProvider theme={customTheme}>
        <AuthProvider>
          <POSProvider>{component}</POSProvider>
        </AuthProvider>
      </ChakraProvider>
    </MemoryRouter>
  );

  return mount(wrapped, mountOptions);
});

Cypress.Commands.add("isInViewport", { prevSubject: true }, (subject) => {
  const bottom = Cypress.$(cy.state("window")).height();
  const rect = subject[0].getBoundingClientRect();

  expect(rect.top).not.to.be.greaterThan(bottom);
  expect(rect.bottom).not.to.be.greaterThan(bottom);

  return subject;
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});
