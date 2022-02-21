// https://docs.cypress.io/api/introduction/api.html

describe("Page load", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Posts");
  });
});

const logInUser = () => {
  cy.visit("/");
  cy.get("a[href='/login']").click();
  cy.get("form").within(() => {
    cy.get('input[name="userName"]').type("stianjsu");
    cy.get('input[name="Password"]').type("Stian123");
    cy.get('input[type="submit"]').click();
  });
};

describe("Post a buy post", () => {
  const dateTest = "2023-02-16T15:00";
  it("Posts a post", () => {
    logInUser();
    cy.get("a[href='/']").click();
    cy.get("a[href='/createpost']").click();
    cy.get("form").within(() => {
      cy.get('input[name="nameEvent"]').type("TestPost");
      cy.get('input[name="typeEvent"]').type("TestPostEvent");
      cy.get('input[name="dateEvent"]').type(dateTest);
      cy.get('button[type="submit"]').click();
    });
    cy.get("a[href='/']").click();
    cy.get(".posts").within(() => {
      cy.contains("TestPost");
      cy.contains("TestPostEvent");
      cy.contains(new Date(dateTest).toISOString());
    });
  });
});

describe("Post a sale post", () => {
  const dateTest = "2023-02-16T15:00";
  it("Posts a post", () => {
    logInUser();
    cy.get("a[href='/']").click();
    cy.get("a[href='/createpost']").click();
    cy.get("form").within(() => {
      cy.get('input[name="nameEvent"]').type("TestPost");
      cy.get('input[name="typeEvent"]').type("TestPostEvent");
      cy.get('input[name="dateEvent"]').type(dateTest);
      cy.get('input[name="buypostCheckbox"]').click();
      cy.get('input[name="priceEvent"]').type(10323);
      cy.get('button[type="submit"]').click();
    });
    cy.get("a[href='/']").click();
    cy.get(".posts").within(() => {
      cy.contains("TestPost");
      cy.contains("TestPostEvent");
      cy.contains(new Date(dateTest).toISOString());
      cy.contains("10323kr");
    });
  });
});
