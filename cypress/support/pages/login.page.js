class LoginPage {

    /* Selectors  */

    usernameInputField='[data-test="username"]';
    passwordInputField= '[data-test="password"]';
    submitLoginButton= '[data-test="login-button"]';    




    

    /* CLICKS */

    clickLoginButton(){
        cy.get(this.submitLoginButton, {timeout:1000}).click()
    }

    /* VALIDATIONS*/

    
    /* FIll */ 

    fillUsernameInputField(){
        cy.get(this.usernameInputField, {timeout:1000}).type('standard_user')
    }

    fillPasswordInputField(){
        cy.get(this.passwordInputField, {timeout:1000}).type('secret_sauce')
    }



}

module.exports = new LoginPage();