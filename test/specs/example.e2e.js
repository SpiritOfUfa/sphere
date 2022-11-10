const expect = require("chai").expect;

describe("Main page test suite", () => {
  // it("Test 1", async () => {
  //   browser.url("https://demoqa.com");
  //   let element = await $$("#app > div > div > div.home-body > div").length;
  //   let elementLength = await element.length;
  //   return expect(elementLength).to.equal(6);
  //   browser.pause(5000);
  // });
  it("Get text from footer", async () => {
    browser.url("https://demoqa.com");
    let footerText = await $("#app > footer > span").getText();
    let text = "© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.";
    expect(footerText).to.equal(text);
  });
  it('Validate the name of tiles', async () => {
    const [elements,forms,alert,widgets,interactions,bookstore] = await $$("h5").map(el => el.getText());
    expect(elements).to.equal("Elements");
    expect(forms).to.equal("Forms");
    expect(alert).to.equal("Alerts, Frame & Windows");
    expect(widgets).to.equal("Widgets");
    expect(interactions).to.equal("Interactions");
    expect(bookstore).to.equal("Book Store Application");
  });
});
