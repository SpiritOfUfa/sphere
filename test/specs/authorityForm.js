const expect = require("chai").expect;

describe("Autority Form", () => {
  it("Check the authorization form ", async () => {
    browser.url("https://dev.sphere.oelp.ru:7443/user/");
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    browser.pause(5000);
    let email = await $$("div.input-wrapper")[2];
    await email.click();
    email.setValue("test123");
   await browser.pause(9000)
    let password = await $$("div.input-wrapper")[3];
     password.click();
     password.setValue("test123");
     browser.pause(5000);
  });
});
