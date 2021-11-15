/// <reference types="Cypress" />
describe("Test Alert",() =>{
    it("Confirm js alert contains the correct text",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button1').click()
        // Check if the alert is present
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    });
    it("Validate Javascript alert box works correctly when click okay",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            return true;
        })
        cy.get('#confirm-alert-text').invoke('text').should('contain','You pressed OK!')
    });
    it("Validate Javascript alert box works correctly when click cancel",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            return false;
        })
        cy.get('#confirm-alert-text').invoke('text').should('contain','You pressed Cancel!')
    });
    it("Validate Javascript alert box using stub",()=>{
        cy.viewport(1366,768)
        cy.visit("http://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;
        }).then(()=>{
            cy.get('#confirm-alert-text').invoke('text').should('contain','You pressed OK!')
        })
    });
})