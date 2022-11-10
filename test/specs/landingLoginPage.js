const expect = require("chai").expect;
import { Urls, Hello } from "../../elements";
describe("Autorization Form", () => {
  it("Check the header name and name of button  ", async () => {
    browser.url(Urls.landingUrl);
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    await browser.pause(1000);
    let headerTitle = await $(
      "body > div:nth-child(11) > div > div > div.modal-header > div.modal-header__toggle-buttons > h3"
    ).getText();
    let expectTitleText = "Вход";
    expect(headerTitle).to.equal(expectTitleText);
  });

  it("Check the name of placeholders(Почта, Пароль)", async () => {
    let emailPlaceholder = await $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    ).getAttribute("placeholder");
    let expectEmailPlaceholder = "Почта";
    expect(emailPlaceholder).to.equal(expectEmailPlaceholder);
    let passwordPlaceholder = await $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
    ).getAttribute("placeholder");
    let expectPasswordPlaceholder = "Пароль";
    expect(passwordPlaceholder).to.equal(expectPasswordPlaceholder);
  });

  it("Check the button name", async () => {
    let buttonName = await $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > button"
    ).getText();
    let expectButtonName = "войти";
    expect(buttonName).to.equal(expectButtonName);
  });

  it("Validation Login Form with correct password ", async () => {
    let email = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    );
    email.click();
    email.setValue("super@site.com");
    let password = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
    );
    password.click();
    password.setValue("1U31xK!qCC");
    let submitButton = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > button"
    );
    await browser.pause(1000);
    let showThePasswordButton = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > button"
    );
    showThePasswordButton.click();
    await browser.pause(5000);
    expect(await password.getAttribute("type")).to.equal("text");
    expect("1U31xK!qCC").to.equal("1U31xK!qCC");
    showThePasswordButton.click();
    expect(await password.getAttribute("type")).to.equal("password");
    // submitButton.click();
    // await browser.pause(1000);
    // let actualUrl = await browser.getUrl();
    // expect(actualUrl).to.equal(Urls.admin);
    // Hello();
  });
  it('Validate Login form with incorrect password or email', async () => {
    browser.url(Urls.landingUrl);
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    await browser.pause(1000);
    let notification = $("body > div:nth-child(11) > div > div > div.Modal-message-wrapper.Modal-message_hide");
    let notificationText = 'Не удалось авторизоваться. Пожалуйста, проверьте введенные данные'
    let email = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    );
    email.click();
    email.setValue("super@site.com");
    let password = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
    );
    password.click();
    password.setValue("1U31xK!qCC112");
    await browser.pause(3000);
    expect(await notification.getAttribute('class')).to.equal("Modal-message-wrapper Modal-message_hide");
    let submitButton = $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > button"
    );
    submitButton.click();
    await browser.pause(2000)
    expect(await notification.getAttribute('class')).to.equal("Modal-message-wrapper Modal-message_show");
  });
});
