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
    // it("Check the elements on form ", async () => {
    //   browser.url("https://dev.sphere.oelp.ru:7443/user/");
    //   let voytiButton = $("div.login-button");
    //   await voytiButton.click();
    //   browser.pause(5000);
    //   const email =  $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input");
    //    email.click();
    //    email.setValue('test123');
    //  await browser.pause(5000)
    //   let password = await $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input");
    //    password.click();
    //    password.setValue("test123");
    //    await browser.pause(9000);
    // });
});
