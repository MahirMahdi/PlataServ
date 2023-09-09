const testFeatureNavigation = (selector, pathname) => {
  cy.getBySel(selector).click();
  cy.wait(1000);
  cy.url().should("include", pathname);
};

it('Should navigate to login page when "Login" button is clicked', () => {
  cy.visit("/");
  cy.get("[data-testid=login-button]").click();
  cy.url().should("include", "/login");
});

it('Should scroll to features section when "View Demo" button is clicked', () => {
  cy.visit("/");
  cy.get("[data-testid=demo-button]").click();
  cy.wait(500); //scrolling down to the features section
  cy.get("[data-testid=feature-card-pos]").isInViewport();
});

it('Should navigate to POS when "Explore POS" button is clicked', () => {
  cy.visit("/");
  testFeatureNavigation("pos-nav", "/menu");
});

it('Should navigate to Inventory when "Try it now" button is clicked', () => {
  cy.visit("/");
  testFeatureNavigation("admin-nav", "/inventory");
});

it('Should navigate to login page when "Get Started" button is clicked', () => {
  cy.visit("/");
  cy.get("[data-testid=get-started-button]").click();
  cy.url().should("include", "/login");
});
