describe("Signup process", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Should navigate to the signup page", () => {
    cy.contains("Create an account");
    cy.url().should("include", "/login");
  });

  it("Should display 'Invalid email' error for empty or invalid email", () => {
    cy.getBySel("signup-email-error").should("contain", "Invalid email");
    cy.getBySel("signup-email").type("demo-email");
    cy.getBySel("signup-email-error").should("contain", "Invalid email");
  });

  it("Should display 'Password does not match' error for password mismatch", () => {
    cy.getBySel("signup-password").type("abcd");
    cy.getBySel("signup-confirm-password").type("efgh");
    cy.getBySel("password-warning-text").should(
      "contain",
      "Password does not match"
    );
  });

  it("Signup button should be enabled only when none of the fields are empty, email is valid, password matches and a role is selected", () => {
    cy.getBySel("signup-button").should("be.disabled");
    cy.getBySel("signup-username").type("abcd");
    cy.getBySel("signup-email").type("abcd@email.com");
    cy.getBySel("signup-password").type("efgh");
    cy.getBySel("signup-confirm-password").type("efgh");
    cy.getBySel("signup-role-Cashier").click();
    cy.getBySel("signup-button").should("not.be.disabled");
  });

  it("Should display login role options when 'Already have an account? Login' is clicked", () => {
    cy.getBySel("auth-type-login").click();
    cy.getBySel("login-role-options").isInViewport();
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
    cy.getBySel("auth-type-login").click();
  });

  it("should navigate to the login page", () => {
    cy.contains("Welcome back");
    cy.url().should("include", "/login");
  });

  it("Login role should be 'Cashier' when Cashier role is selected and display login form", () => {
    cy.getBySel("login-role-cashier").click();
    cy.getBySel("login-form")
      .invoke("attr", "data-state")
      .should("eq", "Cashier");
  });

  it("Login role should be 'Manager' when Manager role is selected and display login form", () => {
    cy.getBySel("login-role-manager").click();
    cy.getBySel("login-form")
      .invoke("attr", "data-state")
      .should("eq", "Manager");
  });

  it("Should display 'Invalid email' error for empty or invalid email", () => {
    cy.getBySel("login-role-cashier").click();
    cy.getBySel("login-email-error").should("contain", "Invalid email");
    cy.getBySel("login-email").type("demo-email");
    cy.getBySel("login-email-error").should("contain", "Invalid email");
  });

  it("Login button should be enabled only when none of the fields are empty, email is valid and a role is selected", () => {
    cy.getBySel("login-role-manager").click();
    cy.getBySel("login-button").should("be.disabled");
    cy.getBySel("login-email").type("abcd@email.com");
    cy.getBySel("login-password").type("efgh");
    cy.getBySel("login-button").should("not.be.disabled");
  });

  it("should successfully login with valid information", () => {
    cy.getBySel("login-role-manager").click();
    cy.getBySel("login-email").type("test@example.com");
    cy.getBySel("login-password").type("password123");
    cy.getBySel("login-button").click();
    cy.contains("Successfully logged in.").should("be.visible");
  });
});
