const expect = require("chai").expect;
import mainPageClass from "../../pageobjectsForMainPage/mainPageClass";
import LoginClass from "../../pageobjectsForLoginForm/LoginClass";
import adminSiteProfileClass from "../../pageobjectsForLoginForm/adminSiteProfileClass"

describe("Test suit for main page", () => {
  it("Check the object list button", async () => {
    browser.url(LoginClass.landingUrl);
    LoginClass.voytiButton.click();
    LoginClass.email.setValue("");
    await browser.pause(1000);
    LoginClass.email.setValue(LoginClass.emailInput);
    await browser.pause(1000);
    LoginClass.password.setValue(LoginClass.correctPasswordInput);
    await browser.pause(1000);
    LoginClass.showPasswordBut.click();
    await browser.pause(2000);
    // expect(await LoginClass.showPasswordButAttribute).to.equal(
    //   LoginClass.correctPasswordInput
    // );
    LoginClass.submitFormButton.click();
    await browser.pause(1000);
    // let actualUrl = await browser.getUrl();
    // expect(await LoginClass.actualUrl).to.equal(LoginClass.expectedUrl);
    await browser.pause(2000);
    adminSiteProfileClass.profileButtonDropdown.click();
    await browser.pause(1000);
    adminSiteProfileClass.returnToSite.click();
    await browser.pause(5000);
    await console.log(mainPageClass.listOfObjectsText);
  });
});
