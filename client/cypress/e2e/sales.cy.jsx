describe("Sales", () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit("/");
    cy.getBySel("admin-nav").click();
    cy.wait(1000);
    cy.getBySel("test-sales-large").click();
  });

  it("Should display revenue table and report after querying", () => {
    cy.getBySel("sales-header").should("have.text", "Revenue");
    cy.getBySel("revenue-filter-type").should("have.text", "Monthly Report");
    cy.getBySel("sales-table-headers").children().should("have.length", 3);
    cy.getBySel("sales-table-body").children().should("have.length", 5);
    cy.getBySel("revenue-filter").select("Monthly");
    cy.getBySel("revenue-period").type("2023-05");
    cy.getBySel("query-revenue").click();
    cy.wait(200);
    cy.getBySel("sales-total-units-sold").should("have.text", "7");
    cy.getBySel("sales-total-sales").should("have.text", "38.93");
  });

  it("Should display sales chart and recent sale card", () => {
    cy.getBySel("sales-chart-filter").select("Monthly");
    cy.getBySel("sales-chart-period").type("2023-05");
    cy.getBySel("query-sales-chart").click();
    cy.wait(200);
    cy.getBySel("sales-chart").should("be.visible");
    cy.getBySel("recent-sales-card")
      .should("be.visible")
      .children()
      .getBySel("card-header")
      .should("have.text", "Recent Sale");
  });

  it("Should display speed of service table and report after querying", () => {
    cy.getBySel("service-speed-header").should("have.text", "Speed of Service");
    cy.getBySel("service-speed-filter-type").should(
      "have.text",
      "Monthly Report"
    );
    cy.getBySel("service-speed-period-table-headers")
      .children()
      .should("have.length", 2);
    cy.getBySel("service-speed-timeline-table-headers")
      .children()
      .should("have.length", 2);
    cy.getBySel("service-speed-period-table-body")
      .children()
      .should("have.length", 3);
    cy.getBySel("service-speed-timeline-table-body")
      .children()
      .should("have.length", 4);
    cy.getBySel("service-speed-filter").select("Monthly");
    cy.getBySel("service-speed-period").type("2023-05");
    cy.getBySel("query-service-speed").click();
    cy.wait(200);
    cy.getBySel("service-speed-total-tickets").should("have.text", "6");
  });
});
