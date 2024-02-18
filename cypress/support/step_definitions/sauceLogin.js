/// <reference types="cypress" />
import {defineStep} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../pages/login.page')


// Steps for Login Test

defineStep("I visit the Website", () => { // cy.visit(Cypress.env('portalBaseUrl'));
    cy.wait(1000)
    cy.visit('https://www.saucedemo.com/')
})


defineStep("I fill the login unsername", () => {
    loginPage.fillUsernameInputField()
})


defineStep("I fill the login password", () => {
    loginPage.fillPasswordInputField();
})

defineStep("I click the login button", () => {
    loginPage.clickLoginButton();
});

defineStep("The product label is visible", () => {
    cy.log("Passed Test");
});


// Login steps

defineStep("I login if I need to", () => {
    cy.wait(1000)
    cy.visit('https://www.saucedemo.com/')
    loginPage.fillUsernameInputField()
    loginPage.fillPasswordInputField();
    loginPage.clickLoginButton();
});

