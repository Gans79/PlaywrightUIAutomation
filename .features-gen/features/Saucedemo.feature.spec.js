/** Generated from: features/Saucedemo.feature */
import { test } from "playwright-bdd";

test.describe("Saucedemo", () => {

  test.describe("Successful Login to Saucelabs", () => {

    test("Example #1", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'standard_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("user is landed on products page sucessfully", null, { page });
    });

    test("Example #2", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'problem_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("user is landed on products page sucessfully", null, { page });
    });

    test("Example #3", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'performance_glitch_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("user is landed on products page sucessfully", null, { page });
    });

    test("Example #4", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'error_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("user is landed on products page sucessfully", null, { page });
    });

    test("Example #5", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'visual_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("user is landed on products page sucessfully", null, { page });
    });

  });

  test.describe("UnSuccessful Login to Saucelabs with locked user", () => {

    test("Example #1", { tag: ["@demo"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate the App via 'https://www.saucedemo.com/inventory.html'", null, { page });
      await When("'locked_out_user' and 'secret_sauce' are entered and click login", null, { page });
      await Then("Locked message is shown to user", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features/Saucedemo.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $workerHookFixtures: [({ browser }, use) => use({ browser }), { scope: "worker" }],
});

const bddFileMeta = {
  "Successful Login to Saucelabs|Example #1": {"pickleLocation":"12:9","tags":["@demo"]},
  "Successful Login to Saucelabs|Example #2": {"pickleLocation":"13:9","tags":["@demo"]},
  "Successful Login to Saucelabs|Example #3": {"pickleLocation":"14:9","tags":["@demo"]},
  "Successful Login to Saucelabs|Example #4": {"pickleLocation":"15:9","tags":["@demo"]},
  "Successful Login to Saucelabs|Example #5": {"pickleLocation":"16:9","tags":["@demo"]},
  "UnSuccessful Login to Saucelabs with locked user|Example #1": {"pickleLocation":"26:9","tags":["@demo"]},
};