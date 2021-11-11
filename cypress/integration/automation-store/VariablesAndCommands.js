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
    it.only("Validate Properties of Contact US Page", () => {
        cy.viewport(1366,768)
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses Cypress Commands and Chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name')
        // Uses JQuery Command
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstnameText = text.find('#field_11').text();
            expect(firstnameText).to.contain('First name');
            
            //  Uses Embedded Commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    })
});