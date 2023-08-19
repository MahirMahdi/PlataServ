const checkFeatureLink = (selector, pathname) => {
  cy.getBySel(selector).click();
  cy.url().should("include", pathname);
  cy.getBySel("test-logout").click();
  cy.getBySel("landing-page-header").isInViewport();
};

describe("landing page", () => {
  it("visit landing page", () => {
    cy.visit("/");
    cy.title().should("eq", "Plataserv");

    cy.getBySel("demo-button").click();
    //waiting for scrolling down to features section
    cy.wait(500);
    cy.getBySel("feature-card-pos").isInViewport();
    checkFeatureLink("pos-link", "/menu");

    cy.getBySel("feature-card-admin").scrollIntoView();
    checkFeatureLink("admin-link", "/inventory");

    cy.getBySel("get-started-button").scrollIntoView();
    cy.getBySel("get-started-button").click();
    //waiting for scrolling up to hero section
    cy.wait(500);
    cy.getBySel("landing-page-header").isInViewport();
  });
});
