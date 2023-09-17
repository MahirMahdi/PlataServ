describe("Dashboard", () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit("/");
    cy.getBySel("admin-nav").click();
    cy.wait(1000);
    cy.getBySel("test-dashboard-large").click();
  });

  it("Should display 'Alerts', 'Order Supplies' and 'Add a product' button", () => {
    cy.url().should("include", "/dashboard");
    cy.getBySel("alerts-header").should("have.text", "Alerts");
    cy.getBySel("order-supplies-button").should("have.text", "Order Supplies");
    cy.getBySel("add-product-button").should("have.text", "Add a product");
  });

  it("Should increase item count when '+' button on the chip is clicked and descrease count when '-' button is clicked", () => {
    cy.getBySel("order-supplies-button").click();
    cy.getBySel("select-items").select("Bun");
    cy.getBySel("item-unit-name").should("have.value", "piece");
    cy.getBySel("item-pack-price").should("have.value", "2.25");
    cy.getBySel("item-units-in-a-pack").should("have.value", "6");
    cy.getBySel("item-expiry-period").should("have.value", "7");
    cy.getBySel("item-total-packs").type("1");
    cy.getBySel("add-one-item").click();
    cy.getBySel("item-chip-container").children().should("have.length", 1);
    cy.getBySel("increase-item").click();
    cy.getBySel("increase-item").click();
    cy.getBySel("item-count").should("have.text", "Bun(3)");
    cy.getBySel("decrease-item").click();
    cy.getBySel("item-count").should("have.text", "Bun(2)");
    cy.getBySel("supplies-total-price").should("have.text", "$4.50");
  });

  it("Should add all items when 'All Items' checkbox is checked and remove all items when it's unchecked", () => {
    cy.getBySel("order-supplies-button").click();
    cy.getBySel("confirm-order-supplies-button").should("be.disabled");
    cy.getBySel("select-all-items").click();
    cy.getBySel("item-chip-container").children().should("have.length", 26);
    cy.getBySel("item-calculations-container")
      .children()
      .should("have.length", 26);
    cy.getBySel("select-all-items").click();
    cy.getBySel("item-chip-container").children().should("have.length", 0);
    cy.getBySel("item-calculations-container")
      .children()
      .should("have.length", 0);
  });

  it("Should order supplies after at least one item is added and 'Order Supplies' button is clicked", () => {
    cy.getBySel("order-supplies-button").click();
    cy.getBySel("add-one-item").should("be.disabled");
    cy.getBySel("confirm-order-supplies-button").should("be.disabled");
    cy.getBySel("select-items").select("Bun");
    cy.getBySel("item-unit-name").should("have.value", "piece");
    cy.getBySel("item-pack-price").should("have.value", "2.25");
    cy.getBySel("item-units-in-a-pack").should("have.value", "6");
    cy.getBySel("item-expiry-period").should("have.value", "7");
    cy.getBySel("item-total-packs").type("1");
    cy.getBySel("add-one-item").click();
    cy.getBySel("item-chip-container").children().should("have.length", 1);
    cy.getBySel("item-calculations-container")
      .children()
      .should("have.length", 1);
    cy.getBySel("supplies-total-price").should("have.text", "$2.25");
    cy.getBySel("confirm-order-supplies-button").click();
    cy.contains("Ordered supplies successfully!");
  });

  it("Should add new product after at least one ingredient is added and 'Add new product' button is clicked", () => {
    cy.getBySel("add-product-button").click();
    cy.getBySel("add-ingredient-button").should("be.disabled");
    cy.getBySel("add-new-product-button").should("be.disabled");
    cy.getBySel("select-product-type").select("Sandwich");
    cy.getBySel("product-name").type("Test Sandwich");
    cy.getBySel("product-description").type("Best Sandwich");
    cy.getBySel("product-price").type("8.99");
    cy.getBySel("product-image").selectFile("cypress/downloads/test.png");
    cy.getBySel("product-ingredient-name").type("Bread");
    cy.getBySel("product-ingredient-unit-name").type("piece");
    cy.getBySel("product-ingredient-pack-price").type("2.25");
    cy.getBySel("product-ingredient-units-in-a-pack").type("6");
    cy.getBySel("product-ingredient-expiry-period").type("7");
    cy.getBySel("add-ingredient-button").click();
    cy.getBySel("ingredients-chip-container")
      .children()
      .should("have.length", 1);
    cy.getBySel("add-new-product-button").click();
    cy.contains("Product added successfully!");
  });
});
