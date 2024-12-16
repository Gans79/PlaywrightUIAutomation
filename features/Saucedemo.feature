@demo 
Feature: Saucedemo 
    Run the Saucedemo scenarios in BDD

Scenario Outline: Successful Login to Saucelabs 
    Given Navigate the App via '<url>' 
    When '<username>' and '<password>' are entered and click login 
    Then user is landed on products page sucessfully

    Examples: 
        | url                                      | username                 | password      | 
        | https://www.saucedemo.com/inventory.html | standard_user            | secret_sauce  |
        | https://www.saucedemo.com/inventory.html | problem_user             | secret_sauce  |
        | https://www.saucedemo.com/inventory.html | performance_glitch_user  | secret_sauce  |
        | https://www.saucedemo.com/inventory.html | error_user               | secret_sauce  |
        | https://www.saucedemo.com/inventory.html | visual_user              | secret_sauce  |


Scenario Outline: UnSuccessful Login to Saucelabs with locked user
    Given Navigate the App via '<url>' 
    When '<username>' and '<password>' are entered and click login 
    Then Locked message is shown to user

    Examples: 
        | url                                      | username                 | password      | 
        | https://www.saucedemo.com/inventory.html | locked_out_user          | secret_sauce  |

    
Scenario Outline: Order a product sucessfully 
    Given Navigate the App via '<url>' 
    When '<username>' and '<password>' are entered and click login 
    Then user is landed on products page sucessfully
    And select '<product>' and add it to cart
    And click cart and verify '<product>' is added sucessfully to cart 
    And click the Checkout button 
    And enter '<firstname>' , '<lastname>' and '<postcode>' and click continue
    And verify '<product>' is added sucessfully to checkout overview
    And click the Finish button
    Then verify that the order is Successful

    Examples: 
        | url                                      | username       | password      | product             | firstname | lastname | postcode |
        | https://www.saucedemo.com/inventory.html | standard_user  | secret_sauce  | Sauce Labs Backpack | Ganesh    | Ranga    | 2760     |








 