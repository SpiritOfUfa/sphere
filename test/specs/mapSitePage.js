const expect = require("chai").expect;
import mainPageClass from "../../pageobjectsForMainPage/mainPageClass";
import LoginClass from "../../pageobjectsForLoginForm/LoginClass";
import adminSiteProfileClass from "../../pageobjectsForLoginForm/adminSiteProfileClass"

describe("Test suit for main page", () => {
  it("Filter testing", async () => {
    browser.maximizeWindow()
    browser.url(LoginClass.landingUrl);
    // await browser.pause(1000)
    LoginClass.voytiButton.click();
    await browser.pause(1000)
    LoginClass.email.setValue(LoginClass.emailInput);
    await browser.pause(1000);
    LoginClass.password.setValue(LoginClass.correctPasswordInput);
    await browser.pause(1000);
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
    expect(await mainPageClass.filterFavorites.getText()).to.equal(mainPageClass.filterFavoritesActualText)
    expect(await mainPageClass.filterByStatus.getText()).to.equal("Фильтрация по статусу")

  });
});
