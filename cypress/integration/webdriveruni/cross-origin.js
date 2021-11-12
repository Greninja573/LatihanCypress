/// <reference types="Cypress" />

describe("Cross Origin Test",()=>{
    it("should be able to access automationstore.com using link on webdriveruni",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
    });
})
