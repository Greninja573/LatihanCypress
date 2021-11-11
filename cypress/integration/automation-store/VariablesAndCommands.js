/// <reference types="Cypress" />

define("Verify Variables, Cypress Commands and JQuery Commands",()=>{
    it("Navigating to Specific Product Pages", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")

        // The commented code is not recommended to use.

        // The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        // The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

        // Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    })
    it("Navigating to Specific Product Pages", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        // Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        // Recommended Approach
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found Header Text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    })
});