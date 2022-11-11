const expect = require("chai").expect;
import LoginClass from "../../pageobjectsForLoginForm/LoginClass"

describe("Autorization Form", () => {
  it("Check the header name and name of button  ", async () => {
    browser.url(LoginClass.landingUrl);
    expect(await LoginClass.voytiButtonTitle).to.equal(LoginClass.expectedVoytiButtonTittle)
    LoginClass.voytiButton.click();
    await browser.pause(1000);
    expect(await LoginClass.headerTittle).to.equal(LoginClass.expectedTittle);
  });

  it("Check the name of placeholders(Почта, Пароль)", async () => {
    expect(await LoginClass.emailPlaceholder).to.equal(LoginClass.expectedEmailPlaceholder);
    expect(await LoginClass.passwordPlaceholder).to.equal(LoginClass.expectedPasswordPlaceholder);
  });

  it("Check the button name", async () => {
    expect(await LoginClass.submitButtonName).to.equal(LoginClass.expectSubmitButtonName);
  });

it('Validate Login form with incorrect password or email', async () => {
  LoginClass.email.click();
  LoginClass.email.setValue(LoginClass.emailInput);
  LoginClass.password.click();
  LoginClass.password.setValue(LoginClass.incorrectPasswordInput);
  await browser.pause(3000);
  expect(await LoginClass.hideNotification.getAttribute('class')).to.equal(LoginClass.unActiveNotificationAttribute);
  await LoginClass.submitFormButton.click();
  await browser.pause(550)
  expect(await LoginClass.showNotification.getAttribute('class')).to.equal(LoginClass.activeNotificationAttribute);
  expect(await LoginClass.notificationText).to.equal(LoginClass.expectedNotificationText);
  LoginClass.showPasswordBut.click();
  await browser.pause(5000);
  expect(await LoginClass.showPasswordButAttribute).to.equal(LoginClass.incorrectPasswordInput)
});

  it("Validation Login Form with correct password ", async () => {
    LoginClass.email.setValue('');
    await browser.pause(1000)
    LoginClass.email.setValue(LoginClass.emailInput)
    await browser.pause(1000)
    LoginClass.password.setValue(LoginClass.correctPasswordInput)
    await browser.pause(1000);
    LoginClass.showPasswordBut.click();
    await browser.pause(2000);
    expect(await LoginClass.showPasswordButAttribute).to.equal(LoginClass.correctPasswordInput)
    LoginClass.submitFormButton.click();
    await browser.pause(1000);
    let actualUrl = await browser.getUrl();
    expect(await LoginClass.actualUrl).to.equal(LoginClass.expectedUrl);
    // Hello();
  });
});
