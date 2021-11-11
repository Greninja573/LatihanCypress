/// <reference types="Cypress" />

describe('Test Contact US from WebDriver Uni' , () => {
    it("should be able to submit a successful submission via contact us form",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        // Check if the page contains utf-8 characters
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // Check if the title is WebDriver | Contact Us
        cy.title().should('include','WebDriver | Contact Us')
        // Check if the url is contact us
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("This is a test on Cypress")
        cy.get('[type="submit"]').click()
        // cy.contains('h1','Thank You for your Message!')
        cy.get('h1').should('have.text','Thank You for your Message!')
    });
    it("should be able to reset a submission via contact us form",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("This is a test on Cypress")
        cy.get('[type="reset"]').click()
        cy.get('[name="first_name"]').should('not.have.value','John')
        cy.get('[name="last_name"]').should('not.have.value','Doe')
        cy.get('[name="email"]').should('not.have.value','test@test.com')
        cy.get('textarea.feedback-input').should('not.have.value','This is a test on Cypress')
    });
    it("should not be able to submit a successful submission via contact us form as all fields are required",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required')
    });
    // To run only one test
    // it.only("should not be able to submit a successful submission via contact us form as all fields are required",()=>{
    //     cy.viewport(1366,768)
    //     cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.get('[name="first_name"]').type("John")
    //     cy.get('[name="last_name"]').type("Doe")
    //     cy.get('[type="submit"]').click()
    //     cy.contains('Error: all fields are required')
    // });
});