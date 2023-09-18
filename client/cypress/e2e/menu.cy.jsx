const checkEachCategory = (selector, attribute) => {
  cy.getBySel(selector).click();
  cy.getBySel("menu-products")
    .children()
    .each((child) => {
      cy.wrap(child).should("have.attr", "data-category", attribute);
    });
};

const checkProductInformation = () => {
  cy.get("[data-testid=menu-products] [data-category]").each((menuCard) => {
    // get product information from the menu card
    const name = menuCard.find("[data-testid=product-name]").text();
    const price = menuCard.find("[data-testid=product-price]").text();
    const image = menuCard.find("[data-testid=product-image]");

    // check if image, name, and price exist
    expect(name).to.not.be.empty;
    expect(price).to.not.be.empty;
    expect(image).to.have.attr("src").and.not.be.empty;
  });
};

const confirmOrder = () => {
  cy.getBySel("customer-name").type("John");
  cy.getBySel("credit-card").click();
  cy.getBySel("uber-eats").click();
  cy.getBySel("take-out").click();
  cy.getBySel("confirm-order-button").click();
  cy.contains(/Order confirmed!|Ingredient unavailable/g);
};

const goToPOS = () => {
  cy.viewport(1536, 960);
  cy.visit("/");
  cy.getBySel("pos-nav").click();
  cy.wait(1000);
};

const addProuct = (selector) => {
  cy.getBySel(selector).click();
};

describe("Menu", () => {
  beforeEach(() => {
    goToPOS();
  });

  it("Should display 4 categories", () => {
    cy.getBySel("menu-categories").children().should("have.length", 4);
  });

  it("Each category should display different products", () => {
    checkEachCategory("burger-tab", "burger");
    checkEachCategory("sandwich-tab", "sandwich");
    checkEachCategory("drinks-tab", "drinks");
    checkEachCategory("sides-tab", "sides");
  });

  it("Should display menu products with image, name, and price", () => {
    checkProductInformation();
    cy.getBySel("sandwich-tab").click();
    checkProductInformation();
    cy.getBySel("drinks-tab").click();
    checkProductInformation();
    cy.getBySel("sides-tab").click();
    checkProductInformation();
  });

  it("Should add the product to the order list when a product is clicked", () => {
    addProuct("burger-0");
    cy.getBySel("order-list").within(() => {
      cy.getBySel("order-card-burger-0").should("exist");
    });
  });

  it("Should display order list products with image, name, price and counter", () => {
    addProuct("burger-0");
    cy.getBySel("order-card-name").should("have.text", "Veggie Burger");
    cy.getBySel("order-card-price").should("have.text", "$8.99");
    cy.getBySel("order-card-image")
      .should("have.attr", "src")
      .and("not.be.empty");
    cy.getBySel("counter-0").should("have.text", "1");
  });

  it("Should increase counter value of the product when a product is clicked multiple times and should not display duplicate products in the order list", () => {
    addProuct("burger-0");
    addProuct("burger-0");
    addProuct("burger-0");
    cy.getBySel("counter-0").should("have.text", "3");
    cy.getBySel("order-list").children().should("have.length", "1");
  });

  it("Should increase the value when '+' button of the counter is clicked and should decrease the value when '-' button is clicked", () => {
    addProuct("burger-0");
    cy.getBySel("counter-increament-0").click();
    cy.getBySel("counter-increament-0").click();
    cy.getBySel("counter-increament-0").click();
    cy.getBySel("counter-decreament-0").click();
    cy.getBySel("counter-decreament-0").click();
    cy.getBySel("counter-0").should("have.text", "2");
  });

  it("Should remove the product from the order list when counter value becomes 0 and display 'Order list is empty' message", () => {
    addProuct("burger-0");
    cy.getBySel("counter-increament-0").click();
    cy.getBySel("counter-decreament-0").click();
    cy.getBySel("counter-decreament-0").click();
    cy.getBySel("order-list")
      .children()
      .should("have.text", "Order list is empty");
  });

  it("Should update customer's name state properly", () => {
    cy.getBySel("customer-name").should("be.empty");
    cy.getBySel("customer-name").type("John");
    cy.getBySel("customer-name").should("have.attr", "data-state", "John");
  });

  it("Should calculate products price correctly", () => {
    // initial values
    cy.getBySel("subtotal-value").should("have.attr", "data-state", "0.00");
    cy.getBySel("tax-value").should("have.attr", "data-state", "0.00");
    cy.getBySel("total-value").should("have.attr", "data-state", "0.00");

    addProuct("burger-1");
    addProuct("burger-4");

    cy.getBySel("subtotal-value").should("have.attr", "data-state", "21.98");
    cy.getBySel("tax-value").should("have.attr", "data-state", "2.20");
    cy.getBySel("total-value").should("have.attr", "data-state", "24.18");
  });

  it("Should update payment, point and destination states properly", () => {
    //initial states
    cy.getBySel("payment-method").should("have.attr", "data-state", "");
    cy.getBySel("order-point").should("have.attr", "data-state", "");
    cy.getBySel("destination").should("have.attr", "data-state", "");

    cy.getBySel("credit-card").click();
    cy.getBySel("uber-eats").click();
    cy.getBySel("take-out").click();

    cy.getBySel("payment-method").should(
      "have.attr",
      "data-state",
      "credit-card"
    );
    cy.getBySel("order-point").should("have.attr", "data-state", "uber-eats");
    cy.getBySel("destination").should("have.attr", "data-state", "take-out");
  });

  it("'Confirm Order' should only be enabled when order list, customer name, payment method, order point and destionation aren't empty", () => {
    cy.getBySel("confirm-order-button").should("be.disabled"); //initially all of them are empty
    addProuct("burger-0");
    cy.getBySel("customer-name").type("John");
    cy.getBySel("credit-card").click();
    cy.getBySel("uber-eats").click();
    cy.getBySel("take-out").click();
    cy.getBySel("confirm-order-button").should("not.be.disabled");
  });

  it("Should confirm order if all ingredients are available or display 'Ingredient unavailable' message", () => {
    addProuct("burger-0");
    confirmOrder();
  });
});
