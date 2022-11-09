const expect = require("chai").expect;

describe("Autority Form", () => {
  it("Check the authorization form ", async () => {
    browser.url("https://dev.sphere.oelp.ru:7443/user/");
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    browser.pause(5000);
    const email =  $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input");
     email.click();
     email.setValue('test123');
   await browser.pause(5000)
    let password = await $("body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input");
     password.click();
     password.setValue("test123");
     await browser.pause(9000);
  });
});
