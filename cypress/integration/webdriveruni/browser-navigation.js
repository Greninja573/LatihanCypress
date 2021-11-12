/// <reference types="Cypress" />
describe("Validate Webdriveruni homepage links",() =>{
    it("Validate Webdriveruni homepage links",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload()
        cy.url().should('include','http://webdriveruniversity.com/')
        cy.go('forward')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','Login-Portal')
        cy.go('back')
        cy.url().should('include','http://webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')
        cy.go('back')
        cy.url().should('include','http://webdriveruniversity.com/')
    });
})
