import { test,expect } from '@playwright/test'; 
import { createBdd } from 'playwright-bdd'; 

const { Given, When, Then } = createBdd(); 

//Locators 
const usernameXpath = '//input[@id="user-name"]'; 
const passwordXpath = '//input[@id="password"]'; 
const loginButtonXpath = '//input[@id="login-button"]'; 
const productsXpath = '//span[@data-test="title"]'; 
const messageXpath = '//h3[@data-test="error"]'; 
const inventoryItem = '//div[@data-test="inventory-item-description"]'; 
const shoppingCartLink = '//a[@data-test="shopping-cart-link"]'; 
const cartItem = '//div[@data-test="inventory-item"]'; 
const firstname = '//input[@id="first-name"]'; 
const lastname = '//input[@id="last-name"]'; 
const postcode = '//input[@id="postal-code"]'; 
const checkoutOverview = '//div[@data-test="inventory-item-name"]'; 




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

Then('select {string} and add it to cart', async ({ page }, product:string) => { 
        await page.locator(inventoryItem)
                  .filter({ hasText: product })
                  .locator('button:has-text("Add to cart")').click()
}); 

Then('click cart and verify {string} is added sucessfully to cart', async ({ page }, product:string) => { 
       await page.locator(shoppingCartLink).click();
       await expect(page.locator(cartItem)).toContainText(product);
}); 

Then('click the Checkout button', async ({ page }) => { 
  await page.locator('button:has-Text("Checkout")').click();
}); 

Then('enter {string} , {string} and {string} and click continue', async ({ page }, fname:string, lname:string, pcode:string) => { 
  await page.locator(firstname).fill(fname);
  await page.locator(lastname).fill(lname);
  await page.locator(postcode).fill(pcode);
  await page.locator('//input[@data-test="continue"]').click();
}); 

Then('verify {string} is added sucessfully to checkout overview', async ({ page }, product:string) => { 
  await expect(page.locator(checkoutOverview)).toContainText(product);
}); 

Then('click the Finish button', async ({ page }, product:string) => { 
  await page.locator('button:has-Text("Finish")').click();
}); 

Then('verify that the order is Successful', async ({ page }) => { 
  await expect(page.locator('h2')).toContainText("Thank you for your order!");
}); 

