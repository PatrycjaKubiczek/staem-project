describe("search bar", () => {
	it("should search for a term", () => {
		cy.visit("http://localhost:3000/");
		cy.get("#search-bar").type("20 minutes");
		cy.get("#search-bar").should("have.value", "20 minutes");
		cy.contains("20 Minutes Till Dawn").should("be.visible");
	});
});
