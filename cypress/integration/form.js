describe("testing form inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/order");
  });
  it("meets MVP", () => {
    cy.get("[data-cy=name").type("Orlando").should("have.value", "Orlando");
    cy.get("[data-cy=size").select("medium").should("have.value", "medium");
    cy.get("[data-cy=pepperoni]").check().should("be.checked");
    cy.get("[data-cy=bacon]").check().should("be.checked");
    cy.get("[data-cy=submit]")
      .click()
      .should("have.prop", { isDisabled: false });
  });
});
