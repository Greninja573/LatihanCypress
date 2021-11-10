/// <reference types="Cypress" />

define("Test Contact US From Automation Store",()=>{
    it("Should be able to submit Contact US Form", () => {
        cy.viewport(1366,768)
        cy.visit("http://automationteststore.com/")
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        // If Programmer change the location
        cy.get("a[href$='contact']").click()
        // cy.contains('CONTACT US')
        cy.get('#ContactUsFrm_first_name').type('John')
        cy.get('#ContactUsFrm_email').type('test@test.com')
        // Check if there's attribute name email
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('Test via Cypress')
        cy.get("button[title='Submit']").click()
        // Use Assertion from Chai
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    })
});