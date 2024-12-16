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








 