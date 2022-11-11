const expect = require("chai").expect;
import { Urls, Hello } from "../../elements";
import buttonsOnTheLoginForm from "../../pageobjectsForLoginForm/buttonsOnTheLoginForm"
import tittleOnTheLoginForm from "../../pageobjectsForLoginForm/tittleOnTheLoginForm"
import LoginClass from "../../pageobjectsForLoginForm/LoginClass"

describe("Autorization Form", () => {
  it("Check the header name and name of button  ", async () => {
    browser.url(Urls.landingUrl);
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
// //from here
it('Validate Login form with incorrect password or email', async () => {
  LoginClass.email.click();
  LoginClass.email.setValue(LoginClass.emailInput);
  LoginClass.password.click();
  LoginClass.password.setValue(LoginClass.incorrectPasswordInput);
  await browser.pause(3000);
  //expect(await LoginClass.hideNotification.getAttribute('class')).to.equal(LoginClass.unActiveNotificationAttribute);
  await LoginClass.submitFormButton.click();
  await browser.pause(550)
  expect(await LoginClass.showNotification.getAttribute('class')).to.equal(LoginClass.activeNotificationAttribute);
  expect(await LoginClass.notification.getAttribute('class')).to.equal(LoginClass.unActiveNotificationAttribute);
  expect(await LoginClass.notificationText).to.equal(LoginClass.expectedNotificationText);
});

  // it("Validation Login Form with correct password ", async () => {
  //   let email = $(
  //     "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
  //   );
  //   email.click();
  //   email.setValue("super@site.com");
  //   let password = $(
  //     "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
  //   );
  //   password.click();
  //   password.setValue("1U31xK!qCC");
  //   let submitButton = $(
  //     "body > div:nth-child(11) > div > div > div.modal-body > form > button"
  //   );
  //   await browser.pause(1000);
  //   let showThePasswordButton = $(
  //     "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > button"
  //   );
  //   showThePasswordButton.click();
  //   await browser.pause(5000);
  //   expect(await password.getAttribute("type")).to.equal("text");
  //   expect("1U31xK!qCC").to.equal("1U31xK!qCC");
  //   showThePasswordButton.click();
  //   expect(await password.getAttribute("type")).to.equal("password");
//     // submitButton.click();
//     // await browser.pause(1000);
//     // let actualUrl = await browser.getUrl();
//     // expect(actualUrl).to.equal(Urls.admin);
//     // Hello();
//   });
  // 
});
