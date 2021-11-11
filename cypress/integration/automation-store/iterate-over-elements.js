/// <reference types="Cypress" />

define("Iterate Over Elements", () => {
    it("Log Information of Hair Care Products", () => {
        cy.viewport(1366, 768)
        cy.visit("http://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })

    })
    it("Add Specifics Product to Basket", () => {
        cy.viewport(1366, 768)
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Pantene Pro-V Conditioner, Classic Care')) {
                cy.wrap($el).click();
            } else {

            }
        })
    })
});