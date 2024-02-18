/// <reference types="cypress" />
import { defineStep } from "cypress-cucumber-preprocessor/steps";
const productsPage = require('../pages/products.page');


defineStep("I am able to visualize the products label", ()=>{
    productsPage.validateProductsLabel()
}  
);    

defineStep("I add two items to cart", ()=>{    
    productsPage.addTwoItemsToCart()
}
);

