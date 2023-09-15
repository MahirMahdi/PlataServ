describe("Orders", () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit("/");
    cy.getBySel("pos-nav").click();
    cy.wait(1000);
  });

  it("Should confirm order, add it to order queue and then add it to completed orders as soon as it's done.", () => {
    // order a product
    cy.getBySel("burger-4").click();
    cy.getBySel("customer-name").type("John");
    cy.getBySel("credit-card").click();
    cy.getBySel("uber-eats").click();
    cy.getBySel("take-out").click();
    cy.getBySel("confirm-order-button").click();
    cy.contains("Order confirmed!");

    //navigate to /orders
    cy.getBySel("test-orders-large").click();
    cy.wait(1000);

    // test order queue
    cy.getBySel("current-orders").children().should("exist");
    cy.getBySel("circular-progress-queue-0").should("exist");
    cy.getBySel("customer-name-queue-0").should("have.text", "John");
    cy.getBySel("destination-queue-0").should("have.text", "Take out");
    cy.getBySel("order-id-queue-0").should("exist");
    cy.getBySel("done-button").click();

    // test completed order
    cy.getBySel("completed-orders").children().should("exist");
    cy.getBySel("circular-progress-completed-1").should("exist");
    cy.getBySel("customer-name-completed-1").should("have.text", "John");
    cy.getBySel("order-id-1").should("exist");
    cy.getBySel("destination-completed-0").should("have.text", "Take out");
  });
});
