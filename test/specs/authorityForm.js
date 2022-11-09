const expect = require("chai").expect;

describe("Autority Form", () => {
  it("Check the authorization form ", async () => {
    browser.url("https://dev.sphere.oelp.ru:7443/user/");
    let voytiButton = $$("div.login-button > div")[0];
    await voytiButton.click();
    browser.pause(5000);
    let email = await $$("div.input-wrapper")[2];
    await email.click();
    await email.setValue("test123");
    let password = await $$("div.input-wrapper")[3];
    await password.click();
    await password.setValue("test123");
    await browser.pause(5000);
  });
});
