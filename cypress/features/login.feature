Feature: Login

    Scenario: [A-001] Login/Enter Organization
        Given I visit the Website
        When  I fill the login unsername   
        And   I fill the login password
        And   I click the login button
        And   The product label is visible  



