describe("Signup process", () => {
  it("Should navigate to the signup page", () => {
    cy.visit("/login");
    cy.contains("Create an account");
    cy.url().should("include", "/login");
  });

  it("Should successfully signup with valid information", () => {
    cy.visit("/login");
    cy.get("[data-testid=signup-username]").type("TestUser");
    cy.get("[data-testid=signup-email]").type("test@example.com");
    cy.get("[data-testid=signup-password]").type("password123");
    cy.get("[data-testid=signup-confirm-password]").type("password123");
    cy.get("[data-testid=signup-role-Manager]").click();
    cy.get("[data-testid=signup-button]").click();
    cy.contains(
      /Your account has been successfully created.|User with this email already exists./g
    );
    // cy.contains("Your account has been successfully created."
    //   /Your account has been successfully created.|User with this email already exists./g
    // );
    // cy.get("[data-testid=auth-page-header]").should((element) => {
    //   const value = element.text();
    //   const possibleValues = /Create an account|Welcome back/;
    //   expect(value).to.match(possibleValues);
    // });
  });
});

describe("Login Process", () => {
  it("should navigate to the login page", () => {
    cy.visit("/login");
    cy.get("[data-testid=auth-type-login]").click();
    cy.contains("Welcome back");
    cy.url().should("include", "/login");
  });

  it("should successfully login with valid information", () => {
    cy.visit("/login");
    cy.get("[data-testid=auth-type-login]").click();
    cy.get("[data-testid=login-role-manager]").click();
    cy.get("[data-testid=login-email]").type("test@example.com");
    cy.get("[data-testid=login-password]").type("password123");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Successfully logged in.").should("be.visible");
  });
});
