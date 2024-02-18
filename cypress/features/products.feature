Feature: Products

    Background: 

    Given I login if I need to

    Scenario: [B-001] Select Two Products for checkout

    Given I am able to visualize 'Products' label
    When  I add two items to cart
    And   The cart has '2' items
    And   I click the cart link
    And   I am able to visualize 'Your Cart' label  
    And   I click the checkout button
    And   I am able to visualize 'Checkout: Your Information' label  
    And   I fill in the first name 'Jorge'
    And   I fill in the last name 'Martinez'
    And   I fill the zipcode '12345'      
    And   I click the form continue button  
    And   I am able to visualize 'Checkout: Overview' label
    And   I click the overview finish button
    Then  I am able to visualize 'Thank you for your order!' label
   
   
