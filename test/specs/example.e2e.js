const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Test 1", async () => {
    browser.url("https://demoqa.com");
    let element =  await $$("div.category-cards > div").length;
    // let elementLength =  await element.length
   return expect(element).to.equal(6)
     browser.pause(5000);
  });
});

