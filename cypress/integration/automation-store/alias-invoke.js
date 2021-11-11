/// <reference types="Cypress" />

define("Alias and Invoke", () => {
    it("Validate a Specifics Hair Care Product", () => {
        cy.viewport(1366, 768)
        cy.visit("http://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });
    it("Validate Numbers Hair Care Product", () => {
        cy.viewport(1366, 768)
        cy.visit("http://automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it.only("Calculate Total of Normal and Sale Products", () => {
        cy.viewport(1366, 768)
        cy.visit("http://automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        // Find the normal item without sale
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            // Split $ into substrings
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non Sale Price Items Total: " + itemPriceTotal)
        });
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale Price Items Total: " + saleItemsPrice)
        })
        .then(() =>{
            cy.log("The Total Price of All Products: " + itemsTotal)
            expect(itemsTotal).to.equal(638)
        })
    });
});