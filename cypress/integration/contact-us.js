/// <reference types="Cypress" />

describe('Test Contact US from WebDriver Uni' , () => {
    it("should be able to submit a successful submission via contact us form",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.visit("http://webdriveruniversity.com/")
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("This is a test on Cypress")
        cy.get('[type="submit"]').click()
        cy.contains('h1','Thank You for your Message!')
    });
    it("should be able to reset a submission via contact us form",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("This is a test on Cypress")
        cy.get('[type="reset"]').click()
    });
    it("should not be able to submit a successful submission via contact us form as all fields are required",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required')
    });
});