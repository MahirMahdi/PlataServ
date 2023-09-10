const navigateToPOS = () => {
  cy.visit("/");
  cy.get("[data-testid=pos-nav]").click();
  cy.wait(1000);
};

const navigateToAdmin = () => {
  cy.visit("/");
  cy.get("[data-testid=admin-nav]").click();
  cy.wait(1000);
};

describe("POS Sidebar", () => {
  it("Should display logo and title", () => {
    navigateToPOS();
    cy.url().should("include", "/menu");
    //testing in large devices
    cy.viewport(1536, 960);
    cy.get("[data-testid=logo-image]").should("be.visible");
    cy.get("[data-testid=logo-title]").should("be.visible");
    //testing in small devices
    cy.viewport(768, 1024);
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=logo-image]").should("be.visible");
    cy.get("[data-testid=logo-title]").should("be.visible");
  });

  it("Should navigate to orders route when 'Orders' button is clicked", () => {
    navigateToPOS();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-orders-small]").click();
    cy.url().should("include", "/orders");
    cy.get("[data-testid=orders-in-progress-header]").should(
      "have.text",
      "In Progress"
    );
  });

  it("Should navigate to help-support route when 'Help & Support' button is clicked", () => {
    navigateToPOS();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-help-support-small]").click();
    cy.url().should("include", "/help-support");
    cy.get("[data-testid=help-support-header]").should(
      "have.text",
      "Coming Soon..."
    );
  });

  it("Should navigate to login route when 'Logout' button is clicked", () => {
    navigateToPOS();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-logout-small]").click();
    cy.url().should("include", "/login");
    cy.get("[data-testid=auth-page-header]").should(
      "have.text",
      "Create an account"
    );
  });
});

describe("Admin Sidebar", () => {
  it("Should display logo and title", () => {
    navigateToAdmin();
    cy.url().should("include", "/inventory");
    //testing in large devices
    cy.viewport(1536, 960);
    cy.get("[data-testid=logo-image]").should("be.visible");
    cy.get("[data-testid=logo-title]").should("be.visible");
    //testing in small devices
    cy.viewport(768, 1024);
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=logo-image]").should("be.visible");
    cy.get("[data-testid=logo-title]").should("be.visible");
  });

  it("Should navigate to dashboard route when 'Dashboard' button is clicked", () => {
    navigateToAdmin();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-dashboard-small]").click();
    cy.url().should("include", "/dashboard");
    cy.get("[data-testid=alerts-header]").should("have.text", "Alerts");
  });

  it("Should navigate to finance route when 'Finance' button is clicked", () => {
    navigateToAdmin();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-finance-small]").click();
    cy.url().should("include", "/finance");
    cy.get("[data-testid=finance-header]").should("have.text", "Profit & Loss");
  });

  it("Should navigate to sales route when 'Sales' button is clicked", () => {
    navigateToAdmin();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-sales-small]").click();
    cy.url().should("include", "/sales");
    cy.get("[data-testid=sales-header]").should("have.text", "Revenue");
  });

  it("Should navigate to help-support route when 'Help & Support' button is clicked", () => {
    navigateToPOS();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-help-support-small]").click();
    cy.url().should("include", "/help-support");
    cy.get("[data-testid=help-support-header]").should(
      "have.text",
      "Coming Soon..."
    );
  });

  it("Should navigate to login route when 'Logout' button is clicked", () => {
    navigateToPOS();
    cy.get("[data-testid=menu-icon]").click();
    cy.get("[data-testid=test-logout-small]").click();
    cy.url().should("include", "/login");
    cy.get("[data-testid=auth-page-header]").should(
      "have.text",
      "Create an account"
    );
  });
});
