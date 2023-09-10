describe("Signup process", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Should navigate to the signup page", () => {
    cy.contains("Create an account");
    cy.url().should("include", "/login");
  });

  it("Should successfully signup with valid information", () => {
    cy.getBySel("signup-username").type("TestUser");
    cy.getBySel("signup-email").type("test@example.com");
    cy.getBySel("signup-password").type("password123");
    cy.getBySel("signup-confirm-password").type("password123");
    cy.getBySel("signup-role-Manager").click();
    cy.getBySel("signup-button").click();
    cy.contains(
      /Your account has been successfully created.|User with this email already exists./g
    );
  });
});

describe("Login Process", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should navigate to the login page", () => {
    cy.getBySel("auth-type-login").click();
    cy.contains("Welcome back");
    cy.url().should("include", "/login");
  });

  it("should successfully login with valid information", () => {
    cy.getBySel("auth-type-login").click();
    cy.getBySel("login-role-manager").click();
    cy.getBySel("login-email").type("test@example.com");
    cy.getBySel("login-password").type("password123");
    cy.getBySel("login-button").click();
    cy.contains("Successfully logged in.").should("be.visible");
  });
});
