import Auth from "../../src/pages/Auth";

it("Should display signup form initially", () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=signup-form]").isInViewport();
});

it("Should display 'Invalid email' text when email is invalid or empty", () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=email-warning-text]").should("contain", "Invalid email");
  cy.get("[data-testid=signup-email]").type("demo-email");
  cy.get("[data-testid=email-warning-text]").should("contain", "Invalid email");
});

it("Should display 'Password does not match' text when password and confirm password doesn't match", () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=signup-password]").type("abcd");
  cy.get("[data-testid=signup-confirm-password]").type("efgh");
  cy.get("[data-testid=password-warning-text]").should(
    "contain",
    "Password does not match"
  );
});

it("Signup button should be enabled only when none of the fields are empty, email is valid, password matches and a role is selected", () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=signup-button]").should("be.disabled");
  cy.get("[data-testid=signup-username]").type("abcd");
  cy.get("[data-testid=signup-email]").type("abcd@email.com");
  cy.get("[data-testid=signup-password]").type("efgh");
  cy.get("[data-testid=signup-confirm-password]").type("efgh");
  cy.get("[data-testid=signup-Cashier]").click();
  cy.get("[data-testid=signup-button]").should("not.be.disabled");
});

it("Should display login role options when 'Already have an account? Login' is clicked", () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=auth-type-login]").click();
  cy.get("[data-testid=login-role-options]").isInViewport();
});
