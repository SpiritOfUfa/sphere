const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Test 1", async () => {
     browser.url("http://google.ru");
     browser.pause(5000)
    let email =  $("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
    // // await email.click();
     await email.setValue("test123");
     await browser.pause(9000)
  });
});
