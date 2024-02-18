class ProductsPage { /* Selectors  */

    usernameInputField = '[data-test="username"]';
    passwordInputField = '[data-test="password"]';
    submitLoginButton = '[data-test="login-button"]';

    productsLabel = 'Products'


    /* CLICKS */

    addTwoItemsToCart() { // Get all inventory items
        
        const inventoryItems = cy.get('.inventory_item');
        //const inventoryItems = cy.contains('Add to cart')

        cy.log("This is is the list:"+inventoryItems)

        // Randomly select two items
        inventoryItems.then($items => { // Get two random indices

            const index1 = Math.floor(Math.random() * $items.length);
            let index2 = Math.floor(Math.random() * $items.length);
            while (index2 === index1) {
                index2 = Math.floor(Math.random() * $items.length);
            }
            cy.wrap($items).eq(index1).click();
            cy.wrap($items).eq(index2).click();
        });
    }


    /* VALIDATIONS*/

    validateProductsLabel() {
        cy.contains(this.productsLabel).should('exist')
    }

    /* FIll */

    /* FIll */


}


module.exports = new ProductsPage();
