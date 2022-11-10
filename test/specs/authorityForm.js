const expect = require("chai").expect;

describe("Autorization Form", () => {
  it("Check the header name and name of button  ", async () => {
    browser.url("https://dev.sphere.oelp.ru:7443/user/");
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    await browser.pause(1000);
    let headerTitle = await $(
      "body > div:nth-child(11) > div > div > div.modal-header > div.modal-header__toggle-buttons > h3"
    ).getText();
    let expectTitleText = "Вход";
    expect(headerTitle).to.equal(expectTitleText);
  });
  it('Check the name of placeholders(Почта, Пароль)', async() => {
    let emailPlaceholder =  await $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input").getAttribute('placeholder');
    let expectEmailPlaceholder = "Почта";
    expect(emailPlaceholder).to.equal(expectEmailPlaceholder);
    let passwordPlaceholder = await $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input").getAttribute("placeholder");
    let expectPasswordPlaceholder = "Пароль"
    expect(passwordPlaceholder).to.equal(expectPasswordPlaceholder);
  });
  it('Check the button name', async () => {
    let buttonName = await $("body > div:nth-child(11) > div > div > div.modal-body > form > button").getText();
    let expectButtonName = "войти";
    expect(buttonName).to.equal(expectButtonName);
  });
    it("Validation Login Form  ", async () => {
      let email =  $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input");
       email.click();
       email.setValue('super@site.com');
      let password =  $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input");
       password.click();
       password.setValue("1U31xK!qCC");
       let submitButton = $("body > div:nth-child(11) > div > div > div.modal-body > form > button");
       await browser.pause(1000);
       submitButton.click();
       await browser.pause(3000);
       let actualUrl = await browser.getUrl();
       expect(actualUrl).to.equal('https://dev.sphere.oelp.ru:7443/admin')
    });
});
