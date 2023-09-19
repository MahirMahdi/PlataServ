const testEachCategory = (totalValue, chartType, cardHeader) => {
  cy.getBySel("inventory-tabs").children().should("have.length", 4);
  cy.getBySel("inventory-filter-type").should("have.text", "Monthly Report");
  cy.getBySel("inventory-table-headers").children().should("have.length", 6);
  cy.getBySel("inventory-filter").select("Monthly");
  cy.getBySel("inventory-period").type("2023-04");
  cy.getBySel("query-inventory").click();
  cy.wait(200);
  cy.getBySel("inventory-total").should("have.text", totalValue);
  cy.getBySel("inventory-chart-filter").select("Monthly");
  cy.getBySel("inventory-chart-period").type("2023-04");
  cy.getBySel("query-inventory-chart").click();
  cy.wait(200);
  cy.getBySel("inventory-chart").should("be.visible");
  cy.getBySel(`recent-${chartType}-card`)
    .should("be.visible")
    .children()
    .getBySel("card-header")
    .should("have.text", cardHeader);
};

describe("Inevntory", () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit("/");
    cy.getBySel("admin-nav").click();
    cy.wait(1000);
  });

  it("Should display purchases table report, chart, and recent purchase card after querying", () => {
    testEachCategory("122.00", "purchases", "Recent Purchase");
  });

  it("Should display wastes table report, chart, and recent waste card after querying", () => {
    cy.getBySel("Wastes").click();
    testEachCategory("10.00", "wastes", "Recent Waste");
  });

  it("Should display foodbank table report, chart, and recent donation card after querying", () => {
    cy.getBySel("Foodbank").click();
    testEachCategory("125.31", "foodbank", "Recent Donation");
  });

  it("Should display inventory table report", () => {
    cy.getBySel("Inventory").click();
    cy.getBySel("inventory-tabs").children().should("have.length", 4);
    cy.getBySel("inventory-table-headers").children().should("have.length", 6);
  });
});
