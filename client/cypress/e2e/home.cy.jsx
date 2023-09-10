const testFeatureNavigation = (selector, pathname) => {
  cy.getBySel(selector).click();
  cy.wait(1000);
  cy.url().should("include", pathname);
};

const testLoginNavigation = (selector) => {
  cy.getBySel(selector).click();
  cy.url().should("include", "/login");
};

describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Should navigate to login page when "Login" button is clicked', () => {
    testLoginNavigation("login-button");
  });

  it('Should scroll to features section when "View Demo" button is clicked', () => {
    cy.getBySel("demo-button").click();
    cy.wait(500); //scrolling down to the features section
    cy.getBySel("feature-card-pos").isInViewport();
  });

  it('Should navigate to POS when "Explore POS" button is clicked', () => {
    testFeatureNavigation("pos-nav", "/menu");
  });

  it('Should navigate to Inventory when "Try it now" button is clicked', () => {
    testFeatureNavigation("admin-nav", "/inventory");
  });

  it('Should navigate to login page when "Get Started" button is clicked', () => {
    testLoginNavigation("get-started-button");
  });
});
