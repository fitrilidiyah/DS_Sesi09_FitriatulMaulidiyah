// const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");

describe("Web Automation Sauce Demo", () => {
  it("should login with standard_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_STANDARD_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await HomePage.validateHomePage();
  });

  it("should get login error with locked_out_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_LOCKED_OUT_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await LoginPage.validateLockedOutUserError();
  });

  it("should login with problem_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_PROBLEM_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await HomePage.validateProblemUser();
  });

  it("should login with performance_glitch_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_PG_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await HomePage.validatePerformanceUser();
  });

  it("should login with error_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_ERROR_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await HomePage.validateErrorUser();
  });

  it("should login with visual_user credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_VISUAL_USER,
      process.env.PASSWORD_SAUCEDEMO
    );
    await HomePage.validateVisualUser();
  });

  it("can't login with invalid username", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.INVALID_USERNAME,
      process.env.PASSWORD_SAUCEDEMO
    );
    await LoginPage.validateInvalidCredentials();
  });

  it("can't login with invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_STANDARD_USER,
      process.env.INVALID_PASSWORD
    );
    await LoginPage.validateInvalidCredentials();
  });

  it("can't login with invalid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.INVALID_USERNAME,
      process.env.INVALID_PASSWORD
    );
    await LoginPage.validateInvalidCredentials();
  });

  it("can't login with empty username", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.EMPTY_USERNAME,
      process.env.PASSWORD_SAUCEDEMO
    );
    await LoginPage.validateEmptyUsername();
  });

  it("can't login with empty password", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.USERNAME_STANDARD_USER,
      process.env.EMPTY_PASSWORD
    );
    await LoginPage.validateEmptyPassword();
  });

  it("can't login with empty credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(
      process.env.EMPTY_USERNAME,
      process.env.EMPTY_PASSWORD
    );
    await LoginPage.validateEmptyUsername();
  });
});
