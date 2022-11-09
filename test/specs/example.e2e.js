// const expect = require("chai").expect;

// describe("Main page test suite", () => {
//   // it('Test 1',  () => {
//   //      browser.url('https://demoqa.com')
//   //      browser.pause(5000)
//   //      const expectedTitle = 'ToolsQA'
//   //      const actualTitle = browser.getTitle();
//   //      expect(actualTitle).to.equal(expectedTitle)
//   // });
// //   it("Test 1", async() => {
// //     browser.url("https://demoqa.com");
// //     // browser.url("https://dev.sphere.oelp.ru:7443/user/")
// // //    let button =  await $("div.login-button");
// //     let element = await $$("div.category-cards > div");
// //     await element[0].click();
// //     await browser.pause(5000);
// //     // expect(el.length).to.equal(6);
// //   });

// });
const expect = require("chai").expect

describe('Autority Form', () => {
    it('Check the authorization form ', async () => {
        browser.url('https://dev.sphere.oelp.ru:7443/user/')
    //  browser.pause(2000)
        let voytiButton =  $("div.login-button")
        voytiButton.click();
         await browser.pause(5000)
    });
});
