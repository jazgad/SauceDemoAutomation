class ProductsPage { /* Selectors  */



    //Product selectors
    usernameInputField = '[data-test="username"]';
    passwordInputField = '[data-test="password"]';
    submitLoginButton = '[data-test="login-button"]';
    shoppingCartBadge = '.shopping_cart_badge';
    shoppingCartLink = '.shopping_cart_link'
    checkoutButton = '[data-test="checkout"]';

    //Form Selectors

    formFirstName = '[data-test="firstName"]'
    formLastName = '[data-test="lastName"]'
    formZipCode = '[data-test="postalCode"]'
    formContinueButton = '[data-test="continue"]'
    overviewFinishButton = '[data-test="finish"]'




    /* CLICKS */

    addTwoItemsToCart() { // Get all inventory items



        //Remove all items in case there are some selected
        
        if (Cypress.$(this.shoppingCartBadge).length > 0)
        {
            cy.get(this.shoppingCartBadge).invoke('text').then(cartAmount => {
                cy.log("The cart has: " + cartAmount)
    
                for (let i = 0; i < cartAmount; i++) {
                    cy.contains('Remove').click();
                }
            }
    
            );

        }
        

       
        





        const inventoryItems = cy.get('.inventory_item');
        //const inventoryItems = cy.contains('Add to cart')

        cy.log("This is is the list:" + inventoryItems)

        // Randomly select two items
        inventoryItems.then($items => {

            const index1 = Math.floor(Math.random() * $items.length);
            let index2 = Math.floor(Math.random() * $items.length);

            while (index2 === index1) {
                index2 = Math.floor(Math.random() * $items.length);
            }

            cy.wrap($items).eq(index1).contains('Add to cart').click();
            cy.wrap($items).eq(index2).contains('Add to cart').click();
        });
    }


    clickShoppingCartLink() {
        cy.get(this.shoppingCartLink).click()
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).click()
    }

    clickContinueButton() {
        cy.get(this.formContinueButton).click()
    }

    clickOverviewFinishButton() {
        cy.get(this.overviewFinishButton).click()
    }


    /* VALIDATIONS*/


    validatePageLabel(text) {
        cy.contains(text).should('exist')
    }


    validateCartHasValidAmount(amount) {
        cy.get(this.shoppingCartBadge).invoke('text').then(cartAmount => {
            expect(cartAmount).to.equal(amount)
        })
    }


    /* FIll */

    fillFormFirstName(text) {
        cy.get(this.formFirstName).type(text)
    }

    fillFormLastName(text) {
        cy.get(this.formLastName).type(text)
    }

    fillFormZipCode(text) {
        cy.get(this.formZipCode).type(text)
    }




}


module.exports = new ProductsPage();
