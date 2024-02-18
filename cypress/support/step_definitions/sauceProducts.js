/// <reference types="cypress" />
import { defineStep } from "cypress-cucumber-preprocessor/steps";
const productsPage = require('../pages/products.page');


defineStep('I am able to visualize {string} label', (text)=>{
    productsPage.validatePageLabel(text)
})

defineStep("I add two items to cart", ()=>{    
    productsPage.addTwoItemsToCart()
}
);

defineStep("The cart has {string} items", (amount)=>{
    productsPage.validateCartHasValidAmount(amount)
}
);


defineStep("I click the cart link", ()=>{
    productsPage.clickShoppingCartLink()
}
);    

defineStep("I click the checkout button", ()=>{
    productsPage.clickCheckoutButton();
});

defineStep("I fill in the first name {string}", (firstName)=>{
    productsPage.fillFormFirstName(firstName)
});

defineStep("I fill in the last name {string}", (lastName)=>{
    productsPage.fillFormLastName(lastName)
});

defineStep("I fill the zipcode {string}", (zipCode)=>{
    productsPage.fillFormZipCode(zipCode)
});

defineStep("I click the form continue button", ()=>{
    productsPage.clickContinueButton()
});

defineStep("I click the overview finish button", ()=>{
    productsPage.clickOverviewFinishButton()
});

