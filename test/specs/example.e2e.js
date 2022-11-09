const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Test 1", () => {
    browser.url("https://demoqa.com");
    let element =  $$("div.category-cards > div");
    let elementLength =  element.length
   return expect(elementLength).to.equal(6)
     browser.pause(5000);
  });
});

