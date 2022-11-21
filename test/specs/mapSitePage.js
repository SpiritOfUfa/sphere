const expect = require("chai").expect;
import mainPageClass from "../../pageobjectsForMainPage/mainPageClass";
import LoginClass from "../../pageobjectsForLoginForm/LoginClass";
import adminSiteProfileClass from "../../pageobjectsForLoginForm/adminSiteProfileClass"

describe("Test suit for main page", () => {
  it("Check the object list button", async () => {
    // browser.fullscreenWindow()
    browser.maximizeWindow()
    // browser.fullscreenWindow()
    browser.url(LoginClass.landingUrl);
    await browser.pause(1000)
    LoginClass.voytiButton.click();
    await browser.pause(1000)
    LoginClass.email.setValue(LoginClass.emailInput);
    await browser.pause(1000);
    LoginClass.password.setValue(LoginClass.correctPasswordInput);
    await browser.pause(1000);
    LoginClass.showPasswordBut.click();
    await browser.pause(1000);
    expect(await LoginClass.showPasswordButAttribute).to.equal(
      LoginClass.correctPasswordInput
    );
    LoginClass.submitFormButton.click();
    await browser.pause(1000);
    expect(await LoginClass.actualUrl).to.equal(LoginClass.adminUrl);
    adminSiteProfileClass.profileButtonDropdown.click();
    await browser.pause(1000);
    adminSiteProfileClass.returnToSite.click();
    mainPageClass.cookieModalButton.click();
    mainPageClass.filterButton.click();
    await browser.pause(2000);
    expect(await mainPageClass.filterSideBar.isExisting()).to.equal(true)

  });
});
