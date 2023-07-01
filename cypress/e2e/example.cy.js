describe("Lighthouse site audit", () => {
  it("check scores", () => {
    cy.visit("/");

    cy.lighthouse({
      accessibility: 40,
      "best-practices": 50,
      seo: 50,
      pwa: 20,
      performance: 50,
    });
  });
});