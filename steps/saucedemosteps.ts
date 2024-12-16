import { test,expect } from '@playwright/test'; 
import { createBdd } from 'playwright-bdd'; 

const { Given, When, Then } = createBdd(); 

//Locators 
const usernameXpath = '//input[@id="user-name"]'; 
const passwordXpath = '//input[@id="password"]'; 
const loginButtonXpath = '//input[@id="login-button"]'; 
const productsXpath = '//span[@data-test="title"]'; 
const messageXpath = '//h3[@data-test="error"]'; 





Given('Navigate the App via {string}', async ({ page }, url: string) => { 
await page.goto(url); 
}); 

 
When('{string} and {string} are entered and click login', async ({ page }, username: string, password: string) => { 
await page.locator(usernameXpath).fill(username);
await page.locator(passwordXpath).fill(password);
await page.locator(loginButtonXpath).click();
}); 

Then('user is landed on products page sucessfully', async ({ page }) => { 
      await expect(page.locator(productsXpath)).toContainText('Products');
    }); 

Then('Locked message is shown to user', async ({ page }) => { 
        await expect(page.locator(messageXpath)).toContainText('locked');
      }); 

