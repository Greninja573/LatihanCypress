/// <reference types="Cypress" />
// Cypress Chain Commands
define("Inspect the Automation Test Store using Chain of Commands",()=>{
    it("Click on the first item using item header", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })
    it("Click on the first item using item text", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })
    it("Click on the first item using index", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
});