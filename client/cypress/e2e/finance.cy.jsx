describe("Finance", () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit("/");
    cy.getBySel("admin-nav").click();
    cy.wait(1000);
    cy.getBySel("test-finance-large").click();
  });

  it("Should display profil & loss stats and transactions report after querying", () => {
    cy.getBySel("finance-PL-header").should("have.text", "Profit & Loss");
    cy.getBySel("finance-transactions-header").should(
      "have.text",
      "Transactions"
    );
    cy.getBySel("finance-filter-type").should("have.text", "Monthly Report");
    cy.getBySel("payment-method-headers").children().should("have.length", 2);
    cy.getBySel("order-point-headers").children().should("have.length", 2);
    cy.getBySel("destination-headers").children().should("have.length", 2);
    cy.getBySel("payment-method-body").children().should("have.length", 3);
    cy.getBySel("order-point-body").children().should("have.length", 3);
    cy.getBySel("destination-body").children().should("have.length", 3);
    cy.getBySel("finance-filter").select("Monthly");
    cy.getBySel("finance-period").type("2023-05");
    cy.getBySel("query-finance").click();
    cy.wait(200);
    cy.getBySel("PL-turnover").should("have.text", "-3524.68%");
    cy.getBySel("gross-sales").should("have.text", "42.83");
  });

  it("Should display finance chart and recent finance card", () => {
    cy.getBySel("finance-chart-filter").select("Monthly");
    cy.getBySel("finance-chart-period").type("2023-05");
    cy.getBySel("query-finance-chart").click();
    cy.wait(200);
    cy.getBySel("finance-chart").should("be.visible");
    cy.getBySel("recent-finance-card")
      .should("be.visible")
      .children()
      .getBySel("card-header")
      .should("have.text", "Recent Transaction");
  });
});
