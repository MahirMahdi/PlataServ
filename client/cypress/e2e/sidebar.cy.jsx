const navigateToPOS = () => {
  cy.visit("/");
  cy.getBySel("pos-nav").click();
  cy.wait(1000);
};

const navigateToAdmin = () => {
  cy.visit("/");
  cy.getBySel("admin-nav").click();
  cy.wait(1000);
};

describe("POS Sidebar", () => {
  it("Should display logo and title", () => {
    navigateToPOS();
    cy.url().should("include", "/menu");
    //testing large devices
    cy.viewport(1536, 960);
    cy.getBySel("logo-image").should("be.visible");
    cy.getBySel("logo-title").should("be.visible");
    //testing small devices
    cy.viewport(768, 1024);
    cy.getBySel("menu-icon").click();
    cy.getBySel("logo-image").should("be.visible");
    cy.getBySel("logo-title").should("be.visible");
  });

  it("Should navigate to orders route when 'Orders' button is clicked", () => {
    navigateToPOS();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-orders-small").click();
    cy.url().should("include", "/orders");
    cy.getBySel("orders-in-progress-header").should("have.text", "In Progress");
  });

  it("Should navigate to help-support route when 'Help & Support' button is clicked", () => {
    navigateToPOS();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-help-support-small").click();
    cy.url().should("include", "/help-support");
    cy.getBySel("help-support-header").should("have.text", "Coming Soon...");
  });

  it("Should navigate to login route when 'Logout' button is clicked", () => {
    navigateToPOS();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-logout-small").click();
    cy.url().should("include", "/login");
    cy.getBySel("auth-page-header").should("have.text", "Create an account");
  });
});

describe("Admin Sidebar", () => {
  it("Should display logo and title", () => {
    navigateToAdmin();
    cy.url().should("include", "/inventory");
    //testing in large devices
    cy.viewport(1536, 960);
    cy.getBySel("logo-image").should("be.visible");
    cy.getBySel("logo-title").should("be.visible");
    //testing in small devices
    cy.viewport(768, 1024);
    cy.getBySel("menu-icon").click();
    cy.getBySel("logo-image").should("be.visible");
    cy.getBySel("logo-title").should("be.visible");
  });

  it("Should navigate to dashboard route when 'Dashboard' button is clicked", () => {
    navigateToAdmin();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-dashboard-small").click();
    cy.url().should("include", "/dashboard");
    cy.getBySel("alerts-header").should("have.text", "Alerts");
  });

  it("Should navigate to finance route when 'Finance' button is clicked", () => {
    navigateToAdmin();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-finance-small").click();
    cy.url().should("include", "/finance");
    cy.getBySel("finance-header").should("have.text", "Profit & Loss");
  });

  it("Should navigate to sales route when 'Sales' button is clicked", () => {
    navigateToAdmin();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-sales-small").click();
    cy.url().should("include", "/sales");
    cy.getBySel("sales-header").should("have.text", "Revenue");
  });

  it("Should navigate to help-support route when 'Help & Support' button is clicked", () => {
    navigateToPOS();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-help-support-small").click();
    cy.url().should("include", "/help-support");
    cy.getBySel("help-support-header").should("have.text", "Coming Soon...");
  });

  it("Should navigate to login route when 'Logout' button is clicked", () => {
    navigateToPOS();
    cy.getBySel("menu-icon").click();
    cy.getBySel("test-logout-small").click();
    cy.url().should("include", "/login");
    cy.getBySel("auth-page-header").should("have.text", "Create an account");
  });
});
