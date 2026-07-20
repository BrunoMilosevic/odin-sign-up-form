const { test, expect } = require("@playwright/test");
const url = "https://brunomilosevic.github.io/odin-sign-up-form/";
const validTestData = {
  name: "John",
  lastName: "Johnson",
  email: "johnjohnson@gmail.com",
  password: "JohnJohnson123",
  confirmPassword: "JohnJohnson123",
};

test("TC-001: Verify Sign Up Page Loads", async ({ page }) => {
  await page.goto(url);

  const form = page.locator("form");

  await expect(form).toBeVisible();
});
test("TC-002: Verify Valid Input in All Fields", async ({ page }) => {
  await page.goto(url);

  const firstName = page.locator("#first-name");
  const lastName = page.locator("#last-name");
  const email = page.locator("#email");
  const password = page.locator("#password");
  const confirmPass = page.locator("#confirm_pass");
  const allInputs = await page.locator(".input-fields input").all();

  await firstName.fill(validTestData.name);
  await lastName.fill(validTestData.lastName);
  await email.fill(validTestData.email);
  await password.fill(validTestData.password);
  await confirmPass.fill(validTestData.confirmPassword);

  for (const input of allInputs) {
    await expect(input).not.toHaveCSS("border-color", "red");
  }
});

test("TC-003: Verify Invalid Name Validation", async ({ page }) => {
  await page.goto(url);

  const invalidName = "1234@";
  const firstName = page.locator("#first-name");

  await firstName.fill(invalidName);

  await expect(firstName).toHaveCSS("border-color", "red");
});
test("TC-004: Verify Invalid Last Name Validation", async ({ page }) => {
  await page.goto(url);

  const invalidLastName = "3324@32!";
  const lastName = page.locator("#last-name");

  await lastName.fill(invalidLastName);

  await expect(lastName).toHaveCSS("border-color", "red");
});
test("TC-005: Verify Email Validation", async ({ page }) => {
  await page.goto(url);

  const invalidEmail = "jh324";
  const email = page.locator("#email");
  const firstName = page.locator("#first-name");
  const lastName = page.locator("#last-name");
  const password = page.locator("#password");
  const confirmPass = page.locator("#confirm_pass");
  const form = page.locator("form");
  const submitBtn = page.locator("#submit-btn");

  await email.fill(invalidEmail);
  await firstName.fill(validTestData.name);
  await lastName.fill(validTestData.lastName);
  await password.fill(validTestData.password);
  await confirmPass.fill(validTestData.confirmPassword);

  await submitBtn.click();

  await expect(email).toHaveCSS("border-color", "red");
  await expect(form).toBeVisible(); // If form is visible that means we are on the signup page rather than login page
});
test("TC-006: Verify Password Validation", async ({ page }) => {
  await page.goto(url);

  const email = page.locator("#email");
  const firstName = page.locator("#first-name");
  const lastName = page.locator("#last-name");
  const password = page.locator("#password");
  const confirmPass = page.locator("#confirm_pass");
  const invalidPassword = "32G";
  const submitBtn = page.locator("#submit-btn");

  await email.fill(validTestData.email);
  await firstName.fill(validTestData.name);
  await lastName.fill(validTestData.lastName);
  await password.fill(invalidPassword);
  await confirmPass.fill(invalidPassword);

  await submitBtn.click();

  await expect(password).toHaveCSS("border-color", "red");
  await expect(form).toBeVisible();
});
test("TC-007: Verify Password Confirmation Validation", async ({ page }) => {
  await page.goto(url);
  const email = page.locator("#email");
  const firstName = page.locator("#first-name");
  const lastName = page.locator("#last-name");
  const password = page.locator("#password");
  const confirmPass = page.locator("#confirm_pass");
  const invalidPassword = "32G";
  const submitBtn = page.locator("#submit-btn");

  await email.fill(validTestData.email);
  await firstName.fill(validTestData.name);
  await lastName.fill(validTestData.lastName);
  await password.fill(validTestData.password);
  await confirmPass.fill(invalidPassword);

  await submitBtn.click();

  await expect(d);
});
