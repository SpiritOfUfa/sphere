const expect = require("chai").expect;

describe("Autority Form", () => {
  it("Check the authorization form ", async () => {
    browser.url("https://dev.sphere.oelp.ru:7443/user/");
    let voytiButton = $("div.login-button");
    await voytiButton.click();
    browser.pause(5000);
    let email = $$("div.input-wrapper")[2];
    await email.click();
    email.setValue("test1323123123123bfsd"); // Разобраться почему эта хуйня не работает
    let password = $$("div.input-wrapper")[3];
    password.click();
    await browser.pause(5000);
    password.setValue("test1323123123123bfsd");
  });
});
