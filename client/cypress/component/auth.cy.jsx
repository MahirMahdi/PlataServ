import Auth from "../../src/pages/Auth";

const goToLoginPage = () => {
  cy.mount(<Auth />);
  cy.get("[data-testid=auth-type-login]").click();
};

describe("Signup components", () => {
  it("Should display signup form initially", () => {
    cy.mount(<Auth />);
    cy.get("[data-testid=signup-form]").isInViewport();
  });

  it("Should display 'Invalid email' error for empty or invalid email", () => {
    cy.mount(<Auth />);
    cy.get("[data-testid=signup-email-error]").should(
      "contain",
      "Invalid email"
    );
    cy.get("[data-testid=signup-email]").type("demo-email");
    cy.get("[data-testid=signup-email-error]").should(
      "contain",
      "Invalid email"
    );
  });

  it("Should display 'Password does not match' error for password mismatch", () => {
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
    cy.get("[data-testid=signup-role-Cashier]").click();
    cy.get("[data-testid=signup-button]").should("not.be.disabled");
  });

  it("Should display login role options when 'Already have an account? Login' is clicked", () => {
    goToLoginPage();
    cy.get("[data-testid=login-role-options]").isInViewport();
  });
});

describe("Login components", () => {
  it("Login role should be 'Cashier' when Cashier role is selected and display login form", () => {
    goToLoginPage();
    cy.get("[data-testid=login-role-cashier]").click();
    cy.get("[data-testid=login-form]")
      .invoke("attr", "data-state")
      .should("eq", "Cashier");
  });

  it("Login role should be 'Manager' when Manager role is selected and display login form", () => {
    goToLoginPage();
    cy.get("[data-testid=login-role-manager]").click();
    cy.get("[data-testid=login-form]")
      .invoke("attr", "data-state")
      .should("eq", "Manager");
  });

  it("Should display 'Invalid email' error for empty or invalid email", () => {
    goToLoginPage();
    cy.get("[data-testid=login-role-cashier]").click();
    cy.get("[data-testid=login-email-error]").should(
      "contain",
      "Invalid email"
    );
    cy.get("[data-testid=login-email]").type("demo-email");
    cy.get("[data-testid=login-email-error]").should(
      "contain",
      "Invalid email"
    );
  });

  it("Login button should be enabled only when none of the fields are empty, email is valid and a role is selected", () => {
    goToLoginPage();
    cy.get("[data-testid=login-role-manager]").click();
    cy.get("[data-testid=login-button]").should("be.disabled");
    cy.get("[data-testid=login-email]").type("abcd@email.com");
    cy.get("[data-testid=login-password]").type("efgh");
    cy.get("[data-testid=login-button]").should("not.be.disabled");
  });
});
